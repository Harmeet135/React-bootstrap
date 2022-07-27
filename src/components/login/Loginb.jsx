import React, { useState } from "react";
import edit from "../../icons/edit.png";
import { createContext } from "react";
import Signup from "./phone/Signup";

export const Gloabaldata = createContext("");

const Loginb = () => {
  const [Sign1, setSign1] = useState(false);
  const handleClick = () => {
    setSign1(!Sign1);
  };

  return (
    <>
      <button class="editb text-m">
        <img onClick={handleClick} src={edit} alt="" />
      </button>
      <Gloabaldata.Provider value={{ Sign1: Sign1, setSign1: setSign1 }}>
        <Signup />
      </Gloabaldata.Provider>
    </>
  );
};

export default Loginb;
