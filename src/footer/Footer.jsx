
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Footer = () => {

  const { dark } = useContext(DataContext)

  return (
    <footer
      name="footer"
      className={`
        flex justify-center items-center py-4 px-4
        ${dark ==="bg-bgDark text-textColorLight"? "bg-black text-gray-500" : "bg-blue-600 text-gray-100"}
      `}
    >
      {/* Container */}
      <div className="text-xl font-bold text-center">
        <p>
          Created by: &nbsp;
          <span>
            <a href="https://ccldev.com/" className="text-blue-400 hover:text-blue-500 underline">
              ccldev.com
            </a>
          </span>
        </p>
        <p>&nbsp;| &#9400; 2024 September all rights reserved.</p>
      </div>
    </footer>
  );
};