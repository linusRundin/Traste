const {expect} = require("chai");
const {describe} = require("mocha");
const {FirestoreClient} = require("../../firestoreClient");
const FS = new FirestoreClient();

describe("The delete function", ()=>{
  it("Should delete the given report", function(done) {
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
    FS.deleteReport(data.docketNumber, data.docketPicture, data.wastePicture)
        .then((res, _)=>{
          expect(res.msg).to.be.eq("Delete was successfull");
          done();
        }).catch(done);
  });
});
