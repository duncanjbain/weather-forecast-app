import React, { useState } from "react";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./Components/Header";
import LocationSearch from "./Components/LocationSearch"


const AppContainer = styled.div`
`;

function App() {

  const [locationSearchInput, setLocationSearchInput] = useState('')

  const updateLocationInput = (event) => {
    setLocationSearchInput(event.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <LocationSearch locationSearchInput={locationSearchInput} updateLocationInput={updateLocationInput} />
      </AppContainer>
    </>
  );
}

export default App;
