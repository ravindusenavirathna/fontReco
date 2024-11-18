import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  width: 50px; /* Spinner dimensions */
  height: 50px;
  border: 8px solid #f3f3f3; /* Light outer border */
  border-top: 8px solid #333; /* Dark top border to create spinning effect */
  border-radius: 50%; /* Circular shape */
  animation: ${spin} 1s linear infinite; /* Continuous spin animation */
`;

export const LoadingOverlay = styled.div`
  position: fixed; /* Stays fixed while loading */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
  display: flex; /* Center loading spinner within overlay */
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Ensures overlay is above other elements */
`;

export const LoadingPopup = styled.div`
  background: #fff; /* White popup background */
  padding: 20px; /* Padding around popup content */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow effect */
  text-align: center;
`;

export const LoadingMessage = styled.div`
  font-size: 1.2em; /* Slightly larger text */
  color: #333; /* Dark text color */
  margin-top: 15px; /* Spacing above message */
`;
