import React, { useState } from "react";

import "./ImageUploader.css";

import image from "./image.jpg";
const ImageUploader = () => {
  const [uploadImage, setUploadImage] = useState(null);

  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const inputBtnActive = () => {
    const input_active = document.querySelector("#input-active");
    input_active.click();
  };

  return (
    <div className="main">
      <div className="container">
        <div className="wrapper">
          <div className="image-area">
            <img src={uploadImage} className="img" />
          </div>
          <div className="content">
            <div className="icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <div className="text">No file chosen.</div>
          </div>
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>
          <div className="file-name">File Name Here</div>
        </div>

        <input
          type="file"
          name="image-upload"
          id="input-active"
          accept="image/jpeg"
          onChange={imageHandler}
          hidden
        />
        <span className="span">Only jpeg or jpg files are allowed.</span>
        <button className="select-btn" onClick={inputBtnActive}>
          Select An Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
