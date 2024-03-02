export const handleChange = (e, field, setEmail, setUrl) => {
  console.log(e);
  if (field === "email") {
    setEmail(e.target.value);
  } else if (field === "url") {
    setUrl(e.target.value);
  }
  return;
};

export const validateEmail = (email, setEmailError) => {
  alert("in email validation");
  if (email.length <= 0) {
    setEmailError(true);
    return false;
  }

  // email address will be checked against this regular expression:
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // returns true if test is passed, else false
  let isValidEmail = emailRegEx.test(email);

  if (isValidEmail) {
    setEmailError(false);
    // alert("Email is VALID");
    return true;
  } else {
    setEmailError(true);
    // alert("Email NOT VALID");
    return false;
  }
};
