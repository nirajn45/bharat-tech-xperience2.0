import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="adminActions flex justify-center items-center flex-col fixed bottom-8 right-8 z-50">
    <div>
      <Link
        className="adminButton flex justify-center items-center w-20 h-20 rounded-full shadow-lg bg-black text-white font-bold text-6xl  transform transition-all duration-300 hover:scale-110 p-10"
        to="https://bharat-tech-xperience3d.vercel.app/"
        target="blank"
        rel="noopener noreferrer"
      >
        3D
      </Link>
    </div>
  </div>
  

  );
};

export default Button;