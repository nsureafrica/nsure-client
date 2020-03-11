const axios = require("axios").default;
// const baseURL = "http://34.67.92.190:3030";
const baseURL = "http://34.67.92.190:3030";


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
