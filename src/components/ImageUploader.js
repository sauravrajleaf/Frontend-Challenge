import React, { useState } from "react";

import "./ImageUploader.css";

import image from "./image.jpg";
const ImageUploader = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [clicked, setClicked] = useState({
    click: false,
    fileName: "",
  });

  const { click, fileName, img_data } = clicked;

  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setClicked({
      ...clicked,
      click: true,
      fileName: e.target.files[0].name,
    });
  };

  const inputBtnActive = () => {
    const input_active = document.querySelector("#input-active");
    input_active.click();
  };

  const handleClose = () => {
    setClicked({
      ...clicked,
      img_data: null,
      click: false,
      fileName: null,
    });
    setUploadImage(null);
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
          {click && (
            <div className="close-btn" onClick={handleClose}>
              <i className="fas fa-times"></i>
            </div>
          )}

          {click && <div className="file-name">{fileName}</div>}
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
