import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [title, setA] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setA(!title);
        }}
        className={`btn-p text-white bg-mycolor `}
        id="btn"
      >
        {title ? "Yes" : "no"}
      </div>
      
    </>
  );
}

export default Button;
