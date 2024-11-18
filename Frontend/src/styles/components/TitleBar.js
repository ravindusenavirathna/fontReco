import styled from "styled-components";

export const TitleBar = styled.div`
  padding-left: 2%;
  /* Add left padding for spacing */
  position: fixed;
  /* Fixes the title bar at the top of the page */
  top: 0;
  left: 0;
  width: 100%;
  /* Full width of the page */
  height: 60px;
  /* Set height of the title bar */
  background-color: white;
  /* Background color (can adjust as needed) */
  display: flex;
  /* Flex box layout for child elements */
  align-items: center;
  /* Vertically centers the content */
  /*justify-content: center;*/
  /* Optional: Center content horizontally, commented out */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  /* Subtle shadow below title bar */
  z-index: 1000;
  /* Ensures the title bar stays above other content */
`;

export const TitleBarLogo = styled.img`
  height: 40px;
  /* Height of the logo, adjust as needed */
`;
