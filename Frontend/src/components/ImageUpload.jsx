import React, { useState } from "react";
import axios from "axios";
import "../styles/ImageUpload.css";

function ImageUpload({ onFontPredicted, onUploadStart, onPredictionStart, onError }) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        if (!image) {
            alert("Please select an image to upload.");
            return;
        }

        onUploadStart(); // Notify App that upload has started

        try {
            const formData = new FormData();
            formData.append("image", image);

            onPredictionStart(); // Notify App that prediction has started

            const response = await axios.post("http://127.0.0.1:5000/predict-font", formData);
            onFontPredicted(response.data); // Handle successful prediction
        } catch (error) {
            console.error("Error during font prediction:", error);
            if (error.response && error.response.status === 404) {
                onError("Font not found or prediction failed. Please try again.");
            } else {
                onError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="image-upload">
            <div className="inputButton">
                <input type="file" onChange={handleImageChange} />
            </div>
            <div className="preview">
                {preview && <img src={preview} alt="Preview" />}
            </div>
            <div className="uploadButton">
                <button onClick={handleUpload}>Upload and Predict Font</button>
            </div>
        </div>
    );
}

export default ImageUpload;
