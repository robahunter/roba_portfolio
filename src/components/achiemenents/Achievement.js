import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import Font Awesome close icon
import "./Achievement.css";
import adc from "../../assets/certs/adventofcy.jpg";
import codewar from "../../assets/certs/codewar.jpg";
import uda from "../../assets/certs/udacity.png";
import xhub from "../../assets/certs/xhub.jpg";
import algorithmxhub from "../../assets/certs/algo.jpg"

const Achievement = () => {
  const [fullImage, setFullImage] = useState(null);

  const handleImageClick = (image) => {
    setFullImage(image); // Set full-screen image
  };

  const closeFullImage = () => {
    setFullImage(null); // Close full-screen image
  };

  return (
    <div>
      {/* Grid Layout for Images */}
      <div className="grid-container">
        <img
          src={adc}
          alt="Achievement 1"
          onClick={() => handleImageClick(adc)}
        />
        <img
          src={codewar}
          alt="Achievement 2"
          onClick={() => handleImageClick(codewar)}
        />
        <img
          src={uda}
          alt="Achievement 3"
          onClick={() => handleImageClick(uda)}
        />
        <img
          src={xhub}
          alt="Achievement 4"
          onClick={() => handleImageClick(xhub)}
        />
         <img
          src={algorithmxhub}
          alt="Achievement 5"
          onClick={() => handleImageClick(algorithmxhub)}
        />
      </div>

      {/* Full-Screen Modal */}
      {fullImage && (
        <div className="full-image-overlay">
          <div className="close-button" onClick={closeFullImage}>
            <FaTimes />
          </div>
          <img src={fullImage} alt="Full Achievement" />
        </div>
      )}
    </div>
  );
};

export default Achievement;
