const axios = require("axios").default;
// const baseURL = "http://34.67.92.190:3030";
// const baseURL = "http://34.67.92.190:3030";
const baseURL = "http://34.67.92.190:3030";
// const baseURL = "https://0c67609e.ngrok.io";

function handleLogIn(password, email, props) {
  return axios
    .post(baseURL + "/signin", {
      username: email,
      password: password
    });
    // .then(function(response) {
    //   // console.log(response);
    //   localStorage.setItem("token", response.data.token);
    //   props.history.push("/client/index");
    // })
    // .catch(function(error) {
    //   // console.log(error);
    // });
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
