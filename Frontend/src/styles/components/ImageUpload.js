import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  display: flex;
  /* Layout for input and preview side-by-side */
`;

export const ImageUploadInputSection = styled.div`
  width: 50%;
  /* Takes up half of the container width */
`;

export const ImageUpload = styled.div`
  width: 100%;
  /* Full width for image upload container */
`;

export const ImageUploadPreview = styled.img`
  max-width: 100%;
  /* Ensures image fits within container */
`;

export const ImageUploadError = styled.div`
  color: red;
  /* Red text color for error messages */
`;

export const Preview = styled.div`
  width: 400px;
  /* Default preview container width */
  height: 300px;
  /* Default preview container height */
`;

export const StyledPreview = styled(Preview)`
  width: 300px;
  /* Specific width for preview */
  height: 300px;
  /* Specific height for preview */
  border: 1px solid #ccc;
  /* Border around preview */
  display: flex;
  /* Centers content inside preview */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* Ensures image does not overflow container */
`;
