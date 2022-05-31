/*
This is the test file for createSite
*/

const {expect} = require("chai");
const FirestoreClient = require("../firestoreClient");
const FS = new FirestoreClient();

describe("The create site function", () => {
  it("Should return site was made", function(done) {
    const data = {
      "adress": "Glava återvinningscentral",
      "name": "EPIC RECYCLING CENTER",
    };

    FS.createSite(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Site was made"}));
      done();
    }).catch(done);
  });
  it("Should return site already exists", function(done) {
    const data = {
      "adress": "Glava återvinningscentral",
      "name": "EPIC RECYCLING CENTER",
    };

    FS.createSite(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Site already exists"}));
      done();
    }).catch(done);
  });

  it("Should return a error", function(done) {
    const data = {
      "adress": "Glava återvinningscentral",
      "name": "EPIC RECYCLING CENTER",
    };

    FS.createSite(data).then((res, body) => {
      done();
    }).catch((err) => {
      expect(JSON.stringify({"error": err.message})).to.be.eq(JSON.stringify(
          {"error": "Value for argument \"documentPath\"" + "\n" +
          "is not a valid resource path. Path must be a non-empty string."}));
      done();
    });
  });
});
