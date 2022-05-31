const {expect} = require("chai");
const {FirestoreClient} = require("../../firestoreClient");
const FS = new FirestoreClient();

/* const reportArray=[{
  "date": "Thu Apr 07 2022",
  "docketNumber": "123a",
  "docketPicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/55efc864-b8f0-4033-840c-abb9885b3591?alt=media&token=5b69b1f4-e365-478b-8b9b-d21777cb9a5a",
  "wastePicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/e2e5a463-cecd-4136-a722-62e51568191c?alt=media&token=9b4ae298-9a10-4cbe-be95-ad69cbb501fe",
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
}, {
  "date": "Thu Apr 07 2022",
  "docketNumber": "123ab",
  "docketPicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/55efc864-b8f0-4033-840c-abb9885b3591?alt=media&token=5b69b1f4-e365-478b-8b9b-d21777cb9a5a",
  "wastePicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/e2e5a463-cecd-4136-a722-62e51568191c?alt=media&token=9b4ae298-9a10-4cbe-be95-ad69cbb501fe",
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
}, {
  "date": "Thu Apr 07 2022",
  "docketNumber": "123abc",
  "docketPicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/55efc864-b8f0-4033-840c-abb9885b3591?alt=media&token=5b69b1f4-e365-478b-8b9b-d21777cb9a5a",
  "wastePicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/e2e5a463-cecd-4136-a722-62e51568191c?alt=media&token=9b4ae298-9a10-4cbe-be95-ad69cbb501fe",
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
}, {
  "date": "Thu Apr 07 2022",
  "docketNumber": "123abcd",
  "docketPicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/55efc864-b8f0-4033-840c-abb9885b3591?alt=media&token=5b69b1f4-e365-478b-8b9b-d21777cb9a5a",
  "wastePicture": "http://localhost:9199/v0/b/traste-71a71.appspot.com/o/e2e5a463-cecd-4136-a722-62e51568191c?alt=media&token=9b4ae298-9a10-4cbe-be95-ad69cbb501fe",
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
}]; */

describe("The get all reports function ", ()=>{
  /*  before(function() {
    reportArray.forEach(async (report)=>{
      await FS.createReport(report);
    });
  }); */


  it("Should return a array with length of atleast one",
      function(done) {
        FS.getAllReports().then((res, body)=>{
          expect(res.length).to.be.at.least(1);
          done();
        }).catch(done);
      });
});
