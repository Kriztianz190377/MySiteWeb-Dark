import React from "react";

import './Footer.css'
export const Footer = ({dark}) => {
  return (
    <footer 
    name="footer" 
    className="footer"
    style={dark==="dark"?{backgroundColor:'#000'}:{backgroundColor:'#292B66',color:'#fff'}}
    >
      {/* Container */}
      <div className="fotter_text">
        <p >
          {''}Created by: &nbsp;
          <span >
            <a href="https://ccldev.com/">ccldev.com</a>
          </span>
        </p>
        <p>&nbsp;| &#9400; 2023 September  all rights reserved.</p>

      </div>
    </footer>
  );
};


