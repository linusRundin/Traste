/*
This is the test file for createFacility
*/

const {expect} = require("chai");
const FirestoreClient = require("../firestoreClient");
const FS = new FirestoreClient();

describe("The create function", () => {
  it("Should return Facility was made", function(done) {
    const data = {
      "facilityId": "a320vbn4",
      "location": "kungsgatan 12",
    };

    FS.createFacility(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify(
          {msg: "Facility was added to the database"}));
      done();
    }).catch(done);
  });
  it("Should return Facility already exists", function(done) {
    const data = {
      "facilityId": "a320vbn4",
      "location": "kungsgatan 16",
    };

    FS.createFacility(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Facility already exists"}));
      done();
    }).catch(done);
  });

  it("Should return an error", function(done) {
    const data = {
      "location": "kungsgatan 12",
    };

    FS.createFacility(data).then((res, body) => {
      done();
    }).catch((err) => {
      expect(JSON.stringify({"error": err.message})).to.be.eq(JSON.stringify(
          {"error": "Value for argument \"documentPath\" " + "\n" +
          "is not a valid resource path. Path must be a non-empty string."}));
      done();
    });
  });
});
