import React, { useState } from "react";
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import show from "../../assets/show.svg";
import hide from "../../assets/hide.svg";
import user from "../../assets/user.svg";

const Input = ({ inputName, handleChange, handleBlur, touched, errors }) => {
  const [showing, setShowing] = useState(false);
  return (
    <div className="gap-1 flex flex-col">
      <div
        className={`border flex w-[100%] gap-2 p-2 rounded-md focus-within:${
          touched && errors ? "border-red-400" : "border-[#6F74DD]"
        }transition-all ${
          touched && errors ? "border-red-400" : "border-[#D0D0D0]"
        }`}
      >
        <img
          src={
            inputName.includes("email")
              ? email
              : inputName.includes("name")
              ? user
              : password
          }
        />
        <input
          id={inputName}
          className={`w-[100%] focus:outline-0`}
          placeholder={
            inputName[0].toUpperCase() + inputName.slice(1, inputName.length)
          }
          color="black"
          name={inputName}
          onChange={handleChange}
          type={
            inputName.includes("password")
              ? showing
                ? "text"
                : "password"
              : "text"
          }
        />
        {inputName.includes("password") ? (
          <img
            src={!showing ? show : hide}
            onClick={() => setShowing(!showing)}
            className="w-6 cursor-pointer"
          />
        ) : (
          <></>
        )}
      </div>
      <p className="text-xs p-0 m-0 w-[100%] text-red-400">
        {touched && errors}
      </p>
    </div>
  );
};

export default Input;
