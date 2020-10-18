import React, { useState } from "react";
import staticWeather from "./json/staticLondon.json";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import LocationSearch from "./components/LocationSearch";
import CurrentWeather from "./components/CurrentWeather";

const AppContainer = styled.div``;

function App() {
  const [locationSearchInput, setLocationSearchInput] = useState("");
  const [locationLatLong, setLocationLatLong] = useState({});

  const updateLocationInput = (latlong) => {
    setLocationSearchInput(latlong);
  };

  const updateLocationLatLong = (latLong) => {
    setLocationLatLong(latLong)
  }

  const [weatherForecast, setWeatherForecast] = useState(staticWeather);

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <LocationSearch
          locationSearchInput={locationSearchInput}
          updateLocationInput={updateLocationInput}
          updateLocationLatLong={updateLocationLatLong}
        />
        <CurrentWeather weatherForecast={weatherForecast} />
      </AppContainer>
    </>
  );
}

export default App;
