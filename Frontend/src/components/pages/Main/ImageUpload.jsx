import React from "react";
import "../styles/ImageUpload.css";
import defaultImage from "logo-tras.png";

function ImageUpload({ onImageChange, preview }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onImageChange(file);
  };

  return (
    <div className="image-upload">
      <div className="preview">
        <img
          src={preview || defaultImage}
          alt="Preview"
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            opacity: preview ? 1 : 0.1,
          }}
        />
      </div>
      <div className="inputButton">
        <input type="file" onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default ImageUpload;
