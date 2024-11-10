import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  filter: ${(props) =>
    props.className === "react"
      ? "drop-shadow(0 0 2em #61dafbaa)"
      : "drop-shadow(0 0 2em #646cffaa)"};

  &:hover {
    filter: ${(props) =>
      props.className === "react"
        ? "drop-shadow(0 0 2em #61dafbaa)"
        : "drop-shadow(0 0 2em #646cffaa)"};
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled(Logo)`
  animation: ${(props) =>
    props.prefersReducedMotion ? "none" : `${spin} infinite 20s linear`};
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.p`
  color: #888;
`;
