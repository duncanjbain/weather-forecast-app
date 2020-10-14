import React, { useState } from "react";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./Components/Header";
import LocationSearch from "./Components/LocationSearch"


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {

  const [locationSearchInput, setLocationSearchInput] = useState('Your location...')

  const updateLocationInput = (event) => {
    event.preventDefault();
    setLocationSearchInput(event.target.value);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <LocationSearch locationSearchInput={locationSearchInput} updateLocationInput={updateLocationInput}/>
      </AppContainer>
    </>
  );
}

export default App;
