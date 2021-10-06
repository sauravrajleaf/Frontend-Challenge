import React, { useState } from "react";

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

  return (
    <div className="container">
      Add your image
      <div className="image-area">
        <h2>Upload your image here</h2>
        <img src={uploadImage} alt="" id="img" className="img" />
      </div>
      <input
        type="file"
        name="image-upload"
        id="input"
        accept="image/jpeg"
        onChange={imageHandler}
      />
    </div>
  );
};

export default ImageUploader;
