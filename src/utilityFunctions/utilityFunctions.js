export const handleChange = (e, field, setEmail, setUrl) => {
  const HTTP = "https://";
  let formValue = e.target.value;

  if (field === "email") {
    setEmail(formValue);
  } else if (field === "url") {
    // check if url contains a protocol, if not, concat "https://"" to url
    if (formValue.includes("https://") || formValue.includes("http://")) {
      setUrl(formValue);
      console.log("url: ", formValue);
    } else {
      setUrl(HTTP + formValue);
    }
  }
};

//
//
//

export const validateEmail = (email, setEmailError) => {
  //edge case
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
    return true;
  } else {
    setEmailError(true);
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
  // url value will be checked against this RegExp to ensure it is a valid url
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
    // check if a correct protocol is being used
    if (
      validatedURL.protocol === "http:" ||
      validatedURL.protocol === "https:"
    ) {
      // check url against RegExp, returns a boolean
      return URLRegEx.test(value);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
