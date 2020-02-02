const axios = require("axios").default;
// const baseURL = "http://127.0.0.1:8080";
const baseURL = "http://127.0.0.1:8080";


function getMotorQuote(
    category,
    vehicleType,
    coverType,
    vehicleEstimatedValue,
    courtesyCarOption,
    politicalViolence,
    excessProtector,
    props
) {
  return axios.post(baseURL + "motor", {
    category: category,
    vehicleType: vehicleType,
    coverType: coverType,
    vehicleEstimatedValue: vehicleEstimatedValue,
    courtesyCarOption: courtesyCarOption,
    politicalViolence: politicalViolence,
    excessProtector: excessProtector,
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });
}


export {getMotorQuote};
