import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* Render input only if not Registered */}
      {props.userIsRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}

      {/* Render button based on if user is registered */}
      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
