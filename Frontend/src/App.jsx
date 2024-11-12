import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import FontPreview from "./components/FontPreview";
import TitleBar from "./components/TitleBar";
import logo from "./assets/logo-tra.png";
import axios from "axios";
import "./App.css";
import "./styles/animations.css";

function App() {
    const [fontData, setFontData] = useState(null);
    const [loadingStage, setLoadingStage] = useState("");
    const [error, setError] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const handleFontPrediction = (data) => {
        setFontData(data);
        setLoadingStage("");
        setError("");
    };

    const handleUploadStart = () => {
        setLoadingStage("Uploading");
        setFontData(null);
        setError("");
    };

    const handlePredictionStart = () => {
        setLoadingStage("Predicting");
    };

    const handleError = (message) => {
        setLoadingStage("");
        setError(message);
    };

    const handleImageChange = (file) => {
        setImage(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleUpload = async () => {
        if (!image) {
            alert("Please select an image to upload.");
            return;
        }

        handleUploadStart();

        try {
            const formData = new FormData();
            formData.append("image", image);

            handlePredictionStart();

            const response = await axios.post("http://127.0.0.1:5000/predict-font", formData);
            handleFontPrediction(response.data);
        } catch (error) {
            console.error("Error during font prediction:", error);
            if (error.response && error.response.status === 404) {
                handleError("Font not found or prediction failed. Please try again.");
            } else {
                handleError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="app">
            <div className="app-container">
                <TitleBar logoSrc={logo} />
                <div className="content-container">
                    <div className="upload-section">
                        <ImageUpload onImageChange={handleImageChange} preview={preview}/>
                    </div>
                    <button onClick={handleUpload}>Predict Font</button>
                    <div className="preview-section">
                        {error ? (
                            <p className="error-message">{error}</p>
                        ) : fontData ? (
                            <FontPreview fontData={fontData}/>
                        ) : (
                            <p className="placeholder">Font prediction will appear here.</p>
                        )}
                    </div>
                </div>

                {loadingStage && (
                    <div className="loading-overlay">
                        <div className="loading-popup">
                            <div className="loading-spinner"></div>
                            <p className="loading-message">
                                {loadingStage === "Uploading"
                                    ? "Uploading. Please Wait..."
                                    : "Predicting Your Font"}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
