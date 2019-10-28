const axios = require("axios").default;
const baseUrl = "https://nsure-252213.appspot.com/";

function handleLogIn(password, email, props) {
  return axios
      .post(baseUrl + "signin", {
        username: email,
        password: password,
      })
      .then(function(response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        props.history.push("/client/index");
      })
      .catch(function(error) {
        console.log(error);
      });
}

function handleRegistration(firstName, lastName, phoneNumber, email, password) {
  return axios
      .post(baseUrl + "signup", {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
}

export {handleLogIn, handleRegistration};
