import axios from "axios";

// const baseURL = "https://nsure-252213.appspot.com";
const baseURL = "http://localhost:8080";

function getRequest(endpoint) {
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl);
}

function postRequest(endpoint, payload) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") }
  };
  const requestUrl = baseURL + endpoint;
  return axios.post(requestUrl, payload, options);
}

export { getRequest, postRequest };
