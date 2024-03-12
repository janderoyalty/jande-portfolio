import React from "react";
import "./Footer.css";

const Footer = () => {
  let getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="content" id="my-footer">
      © {getYear()} All rights reserved - Website by Jande Royalty
    </div>
  );
};

export default Footer;
