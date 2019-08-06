import React, { useState } from "react";

export default function ValueForm(props) {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const { onSubmit, labelText, ...inputProps } = props;

  const trySubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      const response = await onSubmit(value);
      console.debug("Successfully submitted form", response);
    } catch (error) {
      console.log(error);
      setMessage(error.toString());
    }
  }

  return (
    <form onSubmit={trySubmit}>
      <label htmlFor="response">{labelText} </label>
      <input
        id="response"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        {...inputProps}
      />
      {message && (
        <p>{message}</p>
      )}
    </form>
  )
}
