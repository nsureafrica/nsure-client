import axios from "axios";

// const baseURL = "http://34.67.92.190:3030";
const baseURL = "http://34.67.92.190:3030";
// const baseURL = "https://0c67609e.ngrok.io";

var options = {
  headers: { "x-access-token": localStorage.getItem("token") },
};

function getRequest(endpoint) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") },
  };
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl, options);
}

function getFile(endpoint) {
  var options = {
    responseType: "arraybuffer",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };
  const requestUrl = baseURL + endpoint;
  return axios.get(requestUrl, options);
}

function postRequest(endpoint, payload) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") },
  };
  const requestUrl = baseURL + endpoint;
  return axios.post(requestUrl, payload, options);
}

function putRequest(endpoint, payload) {
  var options = {
    headers: { "x-access-token": localStorage.getItem("token") },
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
  var options = {
    headers: { "x-access-token": token },
  };
  var policyRequests = [];
  for (var i = 0; i < policies.length; i++) {
    policyRequests.push(
      axios.get(`${baseURL}/policies/${policies[i]}/getUserPolicies`, options)
    );
  }
  return axios.all(policyRequests);
}

function iPayPost(dataObject, dataString) {
  var hashkey = "54sdlhcdf5drihdfd";
  console.log(hashkey);
  console.log(dataObject);
  var CryptoJS = require("crypto-js");
  var hashid = CryptoJS.HmacSHA1(dataString, hashkey);
  dataObject.hsh = hashid;
  dataObject.cbk = encodeURI(dataObject.cbk);
  dataObject.lbk = encodeURI(dataObject.lbk);
  console.log(dataObject);
  axios
    .post("https://payments.ipayafrica.com/v3/ke", dataObject, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
export {
  getRequest,
  postRequest,
  getAllUserPolicies,
  putRequest,
  getFile,
  iPayPost,
};
