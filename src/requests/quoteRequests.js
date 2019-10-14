const axios = require("axios").default;
const baseUrl = "http://localhost:8080/";

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
  return axios.post(baseUrl + "motor", {
    category: category,
    vehicleType: vehicleType,
    coverType: coverType,
    vehicleEstimatedValue: vehicleEstimatedValue,
    courtesyCarOption: courtesyCarOption,
    politicalViolence: politicalViolence,
    excessProtector: excessProtector
  }).then(function(response){
      console.log(response)
  }).catch(function(error){
      console.log(error)
  });
}


export { getMotorQuote };