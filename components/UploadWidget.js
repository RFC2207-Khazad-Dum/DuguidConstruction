import React from "react";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showWidget = (e) => {
    e.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dlvosib2y`,
        uploadPreset: `soghxmr9`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.props.handleImageUpload(result.info.url)
        }
      }
    );
    widget.open();
  };
  render() {
    return (
      <div>
        <button onClick={this.showWidget}> Upload Image </button>
      </div>
    );
  }
}
export default ImageUpload;
