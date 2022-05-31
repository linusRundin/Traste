import axios from 'axios';

// const url = 'http://localhost:5001/traste-71a71/europe-west3/app';
const url = 'https://europe-west3-traste-71a71.cloudfunctions.net/app';

/**
 * Makes a call with data as login password to authenticate user
 * at the endpoint /login.
 */
export const loginAPI = axios.create({
  baseURL: url + '/login',
});

/**
 * Uploads an image to the backend at the endpoint /uploadimage.
 * Cointains neccesary header for an image.
 */
export const uploadImageAPI = axios.create({
  baseURL: url + '/uploadimage',
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
});

/**
 * Uploads the report to the backend at the endpoint /createreport.
 */
export const createReportAPI = axios.create({
  baseURL: url + '/createreport',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
});

/**
 * Fetches all reports in the database at the endpoint /getAllReports.
 */
export const getAllReportsAPI = axios.create({
  baseURL: url +'/getAllReports',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
});

/**
 * Deletes a report in the database at the endpoint /deleteReport.
 */
export const deleteReportAPI = axios.create({
  baseURL: url+'/deleteReport',
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
});

export default {
  loginAPI, uploadImageAPI, createReportAPI, getAllReportsAPI, deleteReportAPI,
};
