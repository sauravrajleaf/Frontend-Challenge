import React, { Component } from "react";

export class ImageUploader extends Component {
  state = {
    uploadImage: "",
  };

  imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ uploadImage: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  render() {
    const { uploadImage } = this.state;

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
          onChange={this.imageHandler}
        />
      </div>
    );
  }
}

export default ImageUploader;
