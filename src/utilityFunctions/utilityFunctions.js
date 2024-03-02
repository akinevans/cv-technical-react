export const handleChange = (e, field, setEmail, setUrl) => {
  if (field === "email") {
    setEmail(e.target.value);
  } else if (field === "url") {
    setUrl(e.target.value);
  }
  return;
};
