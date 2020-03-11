import axios from "axios";

// const baseURL = "http://34.67.92.190:3030";
// const baseURL = "http://34.67.92.190:3030";
const baseURL = "http://34.67.92.190:3030";

var options = {
  headers: { "x-access-token": localStorage.getItem("token") }
};

function getRequest(endpoint) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") }
  };
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl,options);
}

function postRequest(endpoint, payload) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") }
  };
  const requestUrl = baseURL + endpoint;
  return axios.post(requestUrl, payload, options);
}

function putRequest(endpoint, payload) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") }
  };
  const requestUrl = baseURL + endpoint;
  return axios.put(requestUrl, payload, options);
}

function getAllUserPolicies(policies) {
  const jwtDecode = require("jwt-decode");
  const token = localStorage.getItem("token");
  let userData;
  if (token) {
    userData = jwtDecode(token);
  } else {
    // this.props.history.push("login");
  }
  var policyRequests = [];
  for (var i = 0; i < policies.length; i++) {
    policyRequests.push(
      axios.get(`${baseURL}/policies/${policies[i]}/${userData.email}`)
    );
  }
  return axios.all(policyRequests);
}
export { getRequest, postRequest, getAllUserPolicies, putRequest };
