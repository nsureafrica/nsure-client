import axios from "axios";

const baseURL = "https://nsure-252213.appspot.com/";

function getRequest(endpoint) {
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl);
}

function postRequest(endpoint, payload) {
  const requestUrl = baseURL + endpoint;
  return axios.post(requestUrl, payload);
}

export {getRequest, postRequest};
