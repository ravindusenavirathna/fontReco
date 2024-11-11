import React from "react";
import "../styles/FontPreview.css";

const FontPreview = ({ fontData }) => {
    const { font_name, available } = fontData;

    return (
        <div>
            <h2>Predicted Font: {font_name}</h2>
            <p style={{ fontFamily: font_name }}>
                The quick brown fox jumps over the lazy dog.
            </p>
            {available ? (
                <p>The font is available on your system.</p>
            ) : (
                <p>The font is not available on your system.</p>
            )}
        </div>
    );
};

export default FontPreview;
