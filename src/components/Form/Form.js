import React from "react";
import { useState } from "react";
import "./Form.css";

//TODO: build error state modals
//TODO: build error state modals
//TODO: build error state modals

//utility imports
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email, setEmailError)) {
      console.log(email);
      console.log(url);

      if (processURL(url, setUrlError)) {
        console.log(url);

        const formData = {
          email: email,
          githubRepoUrl: url,
        };

        //TODO: refactor to use await + hooks
        //TODO: refactor to use await + hooks
        //TODO: refactor to use await + hooks

        // fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(formData),
        // })
        //   .then((res) => {
        //     return res.json();
        //   })
        //   .then((data) => {
        //     console.log(data);
        //   });
      }
    }
  };

  return (
    <form
      //   method='POST'
      id='submit-user-info-form'
      className='form-wrapper'
      // onSubmit={(e) => {
      //   handleSubmit(e);
      // }}
    >
      <h1 className='title'>Clearviction Technical - React Version</h1>
      <a
        className='credit'
        href='https://www.linkedin.com/in/akinevans/'
        target='_blank'
        rel='noreferrer'
      >
        Akin Evans
      </a>
      <label htmlFor='email'>Email *</label>
      <input
        className={`form-input ${emailError ? "error" : ""}`}
        id='email'
        type='email'
        name='email'
        placeholder='Your Email'
        onChange={(e) => {
          //reset error state
          setEmailError(false);
          handleChange(e, "email", setEmail, setUrl);
          // console.log(email);
        }}
      />

      <label htmlFor='githubRepoUrl'>GitHub Repo URL *</label>
      <input
        className={`form-input ${urlError ? "error" : ""}`}
        id='githubRepoUrl'
        type='url'
        name='githubRepoUrl'
        onChange={(e) => {
          //reset error state
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
