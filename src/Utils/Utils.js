function isValidEmail(value) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
  const validValue = isValidEmail(value)
  if (validValue) {
    setEmailError("");
  }
  else if (value == "") {
    setEmailError("");
  }
  else {
    setEmailError("Invalid Email");
  }
}

function validatePassword(value, setPasswordError) {
  if (value.length < 9) {
    setPasswordError("Password must be 9 characters")
  } else {
    setPasswordError("")
  }
}

function validateContactNumber(value, setNumberError){
  const sliced = value.slice(0, 1);
  if(sliced != "01" && value.length != 11){
    setNumberError("Start with 01 & 11 characters")
  }
  else if(value == ""){
    setNumberError("Invalid Contact")
  }else{
    setNumberError("")
  }
}

const utils = {
  isValidEmail,
  validateEmail,
  validatePassword,
  validateContactNumber
};

export default utils;