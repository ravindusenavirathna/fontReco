import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import FontPreview from "./components/FontPreview";
import TitleBar from "./components/TitleBar";
import logo from "./assets/logo-tra.png";
import "./App.css";
import "./styles/animations.css";

function App() {
    const [fontData, setFontData] = useState(null);
    const [loadingStage, setLoadingStage] = useState(""); // Track different stages
    const [error, setError] = useState(""); // Track errors

    const handleFontPrediction = (data) => {
        setFontData(data);
        setLoadingStage(""); // Clear loading stage on completion
        setError(""); // Clear previous errors
    };

    const handleUploadStart = () => {
        setLoadingStage("Uploading"); // Set upload stage
        setFontData(null); // Clear previous data
        setError(""); // Clear previous errors
    };

    const handlePredictionStart = () => {
        setLoadingStage("Predicting"); // Set prediction stage
    };

    const handleError = (message) => {
        setLoadingStage(""); // Stop loading
        setError(message);
    };

    return (
        <div className="app-container">
            <TitleBar logoSrc={logo} />
            <div className="content-container">
                <div className="upload-section">
                    <ImageUpload
                        onFontPredicted={handleFontPrediction}
                        onUploadStart={handleUploadStart}
                        onPredictionStart={handlePredictionStart}
                        onError={handleError} // Pass error handler
                    />

                </div>
                <div className="preview-section">
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : fontData ? (
                        <FontPreview fontData={fontData} />
                    ) : (
                        <p className="placeholder">Font prediction will appear here.</p>
                    )}
                </div>
            </div>

            {/* Overlay for loading stages */}
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
    );
}

export default App;
