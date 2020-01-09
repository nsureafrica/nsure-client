const axios = require("axios").default;
// const baseURL = "https://nsure-252213.appspot.com";
// const baseURL = "http://localhost:8080";
const baseURL = "http://192.168.0.190:8080";

function handleLogIn(password, email, props) {
  return axios
    .post(baseURL + "/signin", {
      username: email,
      password: password
    })
    .then(function(response) {
      // console.log(response);
      localStorage.setItem("token", response.data.token);
      props.history.push("/client/index");
    })
    .catch(function(error) {
      // console.log(error);
    });
}

function handleRegistration(firstName, lastName, phoneNumber, email, password) {
  return axios
    .post(baseURL + "/signup", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password
    })
    .then(function(response) {
      // console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export { handleLogIn, handleRegistration };
