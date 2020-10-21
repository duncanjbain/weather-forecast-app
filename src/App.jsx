import React, { useState } from "react";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import LocationSearch from "./components/LocationSearch";
import CurrentWeather from "./components/CurrentWeather";

const AppContainer = styled.div``;

function App() {
  const [locationLatLong, setLocationLatLong] = useState({});
  const [locationName, setLocationName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <LocationSearch
          setLocationLatLong={setLocationLatLong}
          setLocationName={setLocationName}
          setWeatherForecast={setWeatherForecast}
        />
        {weatherForecast && (
          <CurrentWeather
            weatherForecast={weatherForecast}
            locationLatLong={locationLatLong}
            setWeatherForecast={setWeatherForecast}
            locationName={locationName}
          />
        )}
      </AppContainer>
    </>
  );
}

export default App;
