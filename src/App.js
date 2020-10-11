import React from "react";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./Components/Header";


const AppContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
      </AppContainer>
    </>
  );
}

export default App;
