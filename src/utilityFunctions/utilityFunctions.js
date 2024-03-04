export const handleChange = (e, field, setEmail, setUrl) => {
  // console.log(e);
  const HTTP = "https://";

  if (field === "email") {
    setEmail(e.target.value);
  } else if (field === "url") {
    if (
      e.target.value.includes("https://") ||
      e.target.value.includes("http://")
    ) {
      setUrl(e.target.value);
      console.log("url: ", e.target.value);
      return;
    } else {
      setUrl(HTTP + e.target.value);
    }
  }
  return;
};

//
//
//

export const validateEmail = (email, setEmailError) => {
  if (email.length === 0) {
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

//
//
//

export const processURL = (url, setUrlError) => {
  // edge cases
  if (url === "https://" || url.length === 0) {
    setUrlError(true);
    return false;
  }

  if (validateURL(url)) {
    setUrlError(false);
    return true;
  } else {
    setUrlError(true);
    return false;
  }
};

function validateURL(value) {
  const URLRegEx = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );

  try {
    const validatedURL = new URL(value);

    // check if the correct protocol is being used
    if (
      validatedURL.protocol === "http:" ||
      validatedURL.protocol === "https:"
    ) {
      // check url against RegExp, returns a boolean
      return URLRegEx.test(value);
    }
  } catch (error) {
    console.log(error);
    // throw new Error(error);
    return false;
  }
}
