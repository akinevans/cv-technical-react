import React from "react";
import { useState } from "react";
import "./Form.css";

//utility imports
import { handleChange } from "../../utilityFunctions/utilityFunctions";

export default function Form() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <label htmlFor='email'>Email:</label>
      <input
        className='form-input'
        id='email'
        type='email'
        name='email'
        required
        onChange={(e) => {
          handleChange(e, "email", setEmail);
        }}
      />

      <label htmlFor='githubRepoUrl'>GitHub Repo URL:</label>
      <input
        className='form-input'
        id='githubRepoUrl'
        type='url'
        name='githubRepoUrl'
        required
        onChange={(e) => {
          handleChange(e, "url", setUrl);
        }}
      />

      {/* Submit Btn  */}
      <input className='submit-btn' type='submit' value='Submit' />
    </form>
  );
}
