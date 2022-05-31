/*
This file contains functions for deplyoing the firebase database locally.
*/

const {FirestoreClient, uploadImage} = require("./firestoreClient.js");

const FS = new FirestoreClient();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "secret lol";


const {addReport, deleteReport} = require("./sheetsApi");
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors")({origin: true});
const {Validator, ValidationError} =
    require("express-json-validator-middleware");

const {reportSchema} =
    require("./databaseSchemas");

const app = express();

app.use(cors);

// Fixing bug where body cant be parsed when testing the integration.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


function generateToken(data) {
  return jwt.sign(data, TOKEN_SECRET, {expiresIn: "1000000s"});
}


const {validate} = new Validator();

/**
 * This function validates the get request and returns the correct error code.
 * @param {*} error
 * @param {*} _request
 * @param {*} response
 * @param {*} next
 * @return {*} next
 */
function validationErrorMiddleware(error, _request, response, next) {
  if (response.headersSent) {
    return next(error);
  }

  const isValidationError = error instanceof ValidationError;
  if (!isValidationError) {
    return next(error);
  }

  response.status(400).json({
    errors: error.validationErrors,
  });
  next();
}

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, TOKEN_SECRET, (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

app.post("/uploadimage", authenticateJWT, function(req, res) {
  console.log("test");
  const data = req.body;
  uploadImage(data).then((imageURL) =>{
    res.send(imageURL);
  });
});


/*
This is the function for posting on localhost/3000/createreport.
This is for testing the createreport function.
*/
app.post("/createreport", validate({body: reportSchema}),
    authenticateJWT, async (req, res) => {
      const data = req.body;
      if (validatePicureUrl(data.docketPicture) &&
  validatePicureUrl(data.wastePicture)) {
        const msg = await FS.createReport(data);
        const addResp= await addReport(data);
        if (addResp === 200) {
          res.send(msg);
        }
        /*  response.then(async function(msg) {
      const addResp = await addReport(data);
      if (addResp===200) {
        res.send(msg);
      }
    }); */
      } else {
        res.statusCode = 400;
        res.send(JSON.stringify({"error": "Invalid url"}));
      }
    });

/**
 * Returns all reports and sends it to HistoryPage
 */
app.get("/getAllReports", authenticateJWT, async (req, res)=>{
  const resp = await FS.getAllReports();
  res.send(resp);
});

/**
 * Delete function
 */
app.delete("/deleteReport", authenticateJWT, async (req, res) => {
  const data = req.body;
  const resp = await FS.deleteReport(
      data.docketNumber, data.docketPicture, data.wastePicture);
  res.statusCode = resp.status;
  const delResp = await deleteReport(data.docketNumber);
  if (delResp===200) {
    res.send(JSON.stringify(resp));
  }
});

/**
 * Login function takes encrypted string and compares to database.
 * Returns either 200 and token or 403.
 */
app.post("/login", async (req, res) => {
  const hash = await FS.getPassword();
  // console.log("hash data", hash);
  const password = req.body.password;
  if (hash === password) {
    const token = generateToken({});
    res.json({
      accessToken: token,
    });
  } else {
    res.status(401).send("Password incorrect.");
    // incorrect pass makes res undefined for some reason.
  }
});


function validatePicureUrl(picture) {
  let url;

  try {
    url = new URL(picture);
  } catch (error) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

app.use(validationErrorMiddleware);

exports.app = functions.region("europe-west3").https.onRequest(app);
