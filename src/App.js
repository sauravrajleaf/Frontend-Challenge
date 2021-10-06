import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    uploadImage:
      "https://media-exp1.licdn.com/dms/image/C5622AQG6OOdeDdRpxw/feedshare-shrink_800/0/1633353054114?e=1636588800&v=beta&t=USopXDutNaa_sMi_TudKu5oxoBZdQoOyL2pn-PCKRnk",
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
      <div className="App">
        <div className="container">Add your image</div>
        <div className="image-area">
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

export default App;
