import React from "react";
import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const boxTransition = keyframes`
  0% {
    opacity:1;
    top:20px;
  }
  50% {
    opacity:0;
    top:400px;
  }
  100% {
    opacity:1;
    top:20px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
  border-radius: 50px;

  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxTransition} 2s 1s infinite linear alternate;
`;

function App() {
  return (
    <Wrap>
      <Box></Box>
    </Wrap>
  );
}

export default App;
