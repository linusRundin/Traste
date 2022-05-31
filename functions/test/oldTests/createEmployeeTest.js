/*
This is the test file for createEmployee
*/

const {expect} = require("chai");
const FirestoreClient = require("../../firestoreClient");
const FS = new FirestoreClient();

describe("The create function", () => {
  it("Should return Employee was made", function(done) {
    const data = {
      "employeeId": "fsdkjfn4574",
      "name": "Andreas",
      "email": "andreas.email.com",
      "password": "MINKATT",
      "isDeleted": true,
      "facilityId": "fdksnf348347",
    };

    FS.createEmployee(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify(
          {msg: "Employee was added to the database"}));
      done();
    }).catch(done);
  });

  it("Should return Employee already exists", function(done) {
    const data = {
      "employeeId": "fsdkjfn4574",
      "name": "Andreas",
      "email": "andreas.email.com",
      "password": "MINKATT",
      "isDeleted": true,
      "facilityId": "fdksnf348347",

    };

    FS.createEmployee(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Employee already exists"}));
      done();
    }).catch(done);
  });

  it("Should return a error", function(done) {
    const data = {
      "name": "Andreas",
      "email": "andreas.email.com",
      "password": "MINKATT",
      "isDeleted": true,
      "facilityId": "fdksnf348347",

    };

    FS.createEmployee(data).then((res, body) => {
      done();
    }).catch((err) => {
      expect(JSON.stringify({"error": err.message})).to.be.eq(JSON.stringify(
          {"error":
          "Value for argument \"documentPath\" " + "\n" +
          "is not a valid resource path. Path must be a non-empty string."}));
      done();
    });
  });
});
