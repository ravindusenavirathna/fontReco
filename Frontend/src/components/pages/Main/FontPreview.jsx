import React from "react";
import {
  FontPreviewContainerHeading,
  FontPreviewSampleText,
} from "../../../styles/components/FontPreview";

const FontPreview = ({ fontData }) => {
  const { font_name, available } = fontData;

  return (
    <div>
      <FontPreviewContainerHeading>
        Predicted Font: {font_name}
      </FontPreviewContainerHeading>
      <FontPreviewSampleText style={{ fontFamily: font_name }}>
        The quick brown fox jumps over the lazy dog.
      </FontPreviewSampleText>
      {available ? (
        <p>The font is available on your system.</p>
      ) : (
        <p>The font is not available on your system.</p>
      )}
    </div>
  );
};

export default FontPreview;
