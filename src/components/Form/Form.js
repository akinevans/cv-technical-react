import React from "react";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";
import "./Form.css";

//utility function imports
import {
  handleChange,
  validateEmail,
  processURL,
} from "../../utilityFunctions/utilityFunctions";

export default function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(false);

  // process form submission
  const handleSubmit = (e) => {
    // prevent forms default operation
    e.preventDefault();

    if (validateEmail(email, setEmailError)) {
      // console.log(email);
      console.log(typeof email);

      if (processURL(url, setUrlError)) {
        // console.log(url);
        console.log(typeof url);

        // place the user entered form data into an object, formData
        const formData = {
          email: email,
          githubRepoUrl: url,
        };

        // make fetch request
        async function postData() {
          try {
            const response = await fetch(
              "https://cv-devs-temp-challenge.vercel.app/api/challenge",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            );

            //display response / errors
            const data = await response.json();
            console.log(response);
            console.log(data);
          } catch (error) {
            console.error("Error:", error);
          }
        }
        postData();
      }
    }
  };

  return (
    <form id='submit-user-info-form' className='form-wrapper'>
      <h1 className='title'>Clearviction Technical - React Version</h1>
      <a
        className='credit'
        href='https://www.linkedin.com/in/akinevans/'
        target='_blank'
        rel='noreferrer'
      >
        Akin Evans
      </a>
      <label htmlFor='email'>
        Email *
        <ErrorModal
          className={`${!emailError ? "hidden" : ""}`}
          message='Please enter a valid e-mail address.'
        />
      </label>
      <input
        className={`form-input ${emailError ? "error" : ""}`}
        id='email'
        type='email'
        name='email'
        placeholder='Your Email'
        onChange={(e) => {
          //reset email error state
          setEmailError(false);
          handleChange(e, "email", setEmail, setUrl);
          // console.log(email);
        }}
      />

      <label htmlFor='githubRepoUrl'>
        GitHub Repo URL *
        <ErrorModal
          className={`${!urlError ? "hidden" : ""}`}
          message='Please enter a valid Github URL.'
        />
      </label>
      <input
        className={`form-input ${urlError ? "error" : ""}`}
        id='githubRepoUrl'
        type='url'
        name='githubRepoUrl'
        onChange={(e) => {
          //reset url error state
          setUrlError(false);
          handleChange(e, "url", setEmail, setUrl);
          // console.log(url);
        }}
      />
      {/* Submit Btn  */}
      <input
        className='submit-btn'
        type='submit'
        value='Submit'
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      />
    </form>
  );
}
