function onlyAllowNNumericalInput(inputValue) {
  const re = /^[0-9\b]+$/;
  return inputValue === "" || re.test(inputValue);
}

export {onlyAllowNNumericalInput};
