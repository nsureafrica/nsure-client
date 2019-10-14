import axios from "axios";

const baseURL = "http://localhost:8080";

function getRequest(endpoint) {
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl);
}

function postRequest(endpoint, payload) {
  const requestUrl = baseURL + endpoint;
  return axios.post(requestUrl, payload);
}

export { getRequest, postRequest };
