import React from "react";
import { TextInput } from "@mantine/core";
import "./cinput.css";

function CInput({ type, name, placeholder, design, emitFunction, errorCheck }) {
  return (
    <TextInput
      type={type}
      name={name}
      placeholder={placeholder}
      className={design}
      onChange={(e) => emitFunction(e)}
      onBlur={errorCheck ? (e) => errorCheck(e) : undefined}
    />
  );
}

export default CInput;
