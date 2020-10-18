import React, { useState } from "./components/node_modules/react";
import staticWeather from "./json/staticLondon.json";
import GlobalStyle from "./theme/globalStyle";
import styled from "./components/node_modules/styled-components";
import Header from "./components/Header";
import LocationSearch from "./components/LocationSearch";
import CurrentWeather from "./components/CurrentWeather";

const AppContainer = styled.div``;

function App() {
  const [locationSearchInput, setLocationSearchInput] = useState("");

  const updateLocationInput = (event) => {
    setLocationSearchInput(event.target.value);
  };

  const [weatherForecast, setWeatherForecast] = useState(staticWeather);

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <LocationSearch
          locationSearchInput={locationSearchInput}
          updateLocationInput={updateLocationInput}
        />
        <CurrentWeather weatherForecast={weatherForecast} />
      </AppContainer>
    </>
  );
}

export default App;
