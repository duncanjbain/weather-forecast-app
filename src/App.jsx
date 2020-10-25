import React, { useState, useEffect } from "react";
import GlobalStyle from "./theme/globalStyle";
import styled from "styled-components";
import Header from "./components/Header";
import LocationSearch from "./components/LocationSearch";
import CurrentWeather from "./components/CurrentWeather";
import fetchWeather from "./services/weatherApi" 

const AppContainer = styled.div``;

function App() {
  const [locationLatLong, setLocationLatLong] = useState({});
  const [locationName, setLocationName] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('lat')) {
      const placesApiUrl = `https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${localStorage.getItem('lat')},${localStorage.getItem('lng')}&hitsPerPage=1&language=en`;
      fetch(placesApiUrl)
        .then((response) => response.json())
        .then((data) => {
          setLocationName(`${data.hits[0].locale_names[0]}`);
        });
      fetchWeather({lat: localStorage.getItem('lat'), lng: localStorage.getItem('lng')}).then(forecast => {
        setWeatherForecast(forecast);
      })
    }
  },[])

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
