import React, { useState } from "react";

import Reactions from "../reactions/Reactions";

import "./ImageUploader.css";

const ImageUploader = (props) => {
  const [uploadImage, setUploadImage] = useState(null);
  const [clicked, setClicked] = useState({
    click: false,
    fileName: "",
  });

  const { click, fileName } = clicked;

  const imageHandler = (e) => {
    if (e.target.files[0].name.match(/.(jpg|jpeg)$/i)) {
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
    } else
      alert("Invalid file chosen.Please choose file of type: (jpeg or jpg)");
  };

  const inputBtnActive = () => {
    const input_active = document.querySelector("#input-active");
    input_active.click();
  };

  const handleClose = () => {
    setClicked({
      ...clicked,
      click: false,
      fileName: null,
    });
    setUploadImage(null);
    localStorage.removeItem("Total Reactions");
  };

  return (
    <div className="main">
      <h1>React Image Uploader</h1>
      <div className="container">
        <div className="wrapper">
          <div className="image-area">
            <img src={uploadImage} alt="" className="img" />
          </div>
          <div className="content">
            <div className="icon">
              <i class="fas fa-cloud-upload-alt"></i>
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
        <Reactions click={click} />
        <button className="select-btn" onClick={inputBtnActive}>
          Select An Image
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
