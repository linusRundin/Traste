/*
This is the test file for createReport
*/

const {expect} = require("chai");
const {FirestoreClient} = require("../../firestoreClient");
const FS = new FirestoreClient();

describe("The create function", () => {
  it("Should return report was made", function(done) {
    const data = {
      "date": "Thu Apr 07 2022",
      "docketNumber": "testData",
      "docketPicture":
      "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "wastePicture":
      "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "name": "NULL",
      "weight": 100,
      "binSize": 10,
      "site": "Norrköping",
      "wasteData": {
        "Wood": 100,
        "Plastic": 0,
        "Concrete": 0,
        "Metal": 0,
        "Other": 0,
      },
      "timeStamps": "Thu, 07 Apr 2022 14:41:44 GMT",
    };

    FS.createReport(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Report was made"}));
      done();
    }).catch(done);
  });
  it("Should return report already exists", function(done) {
    const data = {
      "date": "Thu Apr 07 2022",
      "docketNumber": "testData",
      "docketPicture": "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "wastePicture": "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "name": "NULL",
      "weight": 100,
      "binSize": 10,
      "site": "Norrköping",
      "wasteData": {
        "Wood": 100,
        "Plastic": 0,
        "Concrete": 0,
        "Metal": 0,
        "Other": 0,
      },
      "timeStamps": "Thu, 07 Apr 2022 14:41:44 GMT",
    };

    FS.createReport(data).then((res, body) => {
      expect(res).to.be.eq(JSON.stringify({msg: "Report already exists"}));
      done();
    }).catch(done);
  });

  it("Should return a error", function(done) {
    const data = {
      "date": "Thu Apr 07 2022",
      "docketNumber": "testData1",
      "docketPicture": "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "wastePicture": "https://firebasestorage.googleapis.com/v0/b/traste-71a71.appspot.com/o/c77e148c-81b0-4f7d-a41c-c84fc2166be3?alt=media&token=78437d98-28ec-402a-9e11-7a19079273d9",
      "name": "NULL",
      "weight": "100",
      "binSize": 10,
      "site": "Norrköping",
      "wasteData": {
        "Wood": 100,
        "Plastic": 0,
        "Concrete": 0,
        "Metal": 0,
        "Other": 0,
      },
    };

    FS.createReport(data).then((res, body) => {
      done();
    }).catch((err)=>{
      expect(err.name).to.equal("Error");
      done();
    });
  });
});
