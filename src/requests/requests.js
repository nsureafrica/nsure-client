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
      axios.get(`${baseURL}/policies/${policies[i]}/${userData.id}`)
    );
  }
  return axios.all(policyRequests);
}
export { getRequest, postRequest, getAllUserPolicies };
