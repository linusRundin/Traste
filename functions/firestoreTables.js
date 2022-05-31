
/*
    This function creates a site from data.
    If data is not formatted correctly a error code will be provided
    params data
    returns promise
    */
/*
function createSite(data) {
  const reportData = {
    adress: data.adress, // STRING
    name: data.name, // STRING
  };
  const response = this.firestore.collection("Sites").doc(data.adress).get()
      .then(async (doc) =>{
        if (doc.exists) {
          return JSON.stringify({msg: "Site already exists"});
        } else {
          await this.firestore.collection("Sites").
              doc(data.adress).set(reportData);
          return JSON.stringify({msg: "Site was made"});
        }
      });
  return response;
} */
/*
        This function is used to log different types of waste.
        Waste is included in logging a report in the database.
        params data
        returns promise
        */
/* function createWaste(data) {
  const reportData = {
    materialName: data.materialName, // STRING
    density: data.density, // DOUBLE
  };
  const response = this.firestore.collection("Waste").
      doc(data.materialName).get()
      .then(async (doc) =>{
        if (doc.exists) {
          return JSON.stringify({msg: "Waste already exists"});
        } else {
          await this.firestore.collection("Waste").
              doc(data.materialName).set(reportData);
          return JSON.stringify({msg: "Waste was added to the database"});
        }
      });
  return response;
} */

/*
        This function writes facilities into the database.
        params data
        returns promise
        */
/* function createFacility(data) {
  const reportData = {
    facilityId: data.facilityId, // STRING
    location: data.location, // STRING
  };
  const response = this.firestore.collection("Facilities").
      doc(data.facilityId).get()
      .then(async (doc) =>{
        if (doc.exists) {
          return JSON.stringify({msg: "Facility already exists"});
        } else {
          await this.firestore.collection("Facilities").
              doc(data.facilityId).set(reportData);
          return JSON.stringify({msg: "Facility was added to the database"});
        }
      });
  return response;
} */

/*
        This function writes employees into the database.
        params data
        returns promise
        */

/* function createEmployee(data) {
  const reportData = {
    employeeId: data.employeeId, // STRING
    name: data.name, // STRING
    email: data.email, // STRING
    password: data.password, // STRING
    isDeleted: data.isDeleted, // BOLEAN
    facilityId: data.facilityId, // STRING
  };
  const response = this.firestore.collection("Employees").
      doc(data.employeeId).get()
      .then(async (doc) =>{
        if (doc.exists) {
          return JSON.stringify({msg: "Employee already exists"});
        } else {
          await this.firestore.collection("Employees").
              doc(data.employeeId).set(reportData);
          return JSON.stringify({msg: "Employee was added to the database"});
        }
      });
  return response;
}
 */
