import React from "react";
import { useState } from "react";
import "./Form.css";

//TODO: error modals

//utility imports
import {
  handleChange,
  validateEmail,
} from "../../utilityFunctions/utilityFunctions";

export default function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [url, setUrl] = useState("https://");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email, setEmailError) === false) {
      setEmailError(true);
    } else {
      alert(email);
      alert(url);

      const formData = {
        email: email,
        githubRepoUrl: url,
      };

      //TODO: refactor to use await + hooks
      fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <form
      //   method='POST'
      id='submit-user-info-form'
      className='form-wrapper'
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label htmlFor='email'>Email *</label>
      <input
        className={`form-input ${emailError ? "error" : ""}`}
        id='email'
        type='email'
        name='email'
        onChange={(e) => {
          handleChange(e, "email", setEmail, setUrl);
          // console.log(email);
        }}
      />

      <label htmlFor='githubRepoUrl'>GitHub Repo URL *</label>
      <input
        className='form-input'
        id='githubRepoUrl'
        type='url'
        name='githubRepoUrl'
        onChange={(e) => {
          handleChange(e, "url", setEmail, setUrl);
          // console.log(url);
        }}
      />

      {/* Submit Btn  */}
      <input className='submit-btn' type='submit' value='Submit' />
    </form>
  );
}
