import React from "react";
import styled from "styled-components";

const BasicWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherIconTemperature = styled.div`
  display: flex;
`;

const BasicWeather = ({ weatherForecast, locationName }) => {
  return (
    <BasicWeatherContainer>
      <h3>{locationName}</h3>
      <WeatherIconTemperature>
        <p>Sunny</p>
        <p>{weatherForecast.current.temp}</p>
      </WeatherIconTemperature>
      <h3>{weatherForecast.current.weather[0].description}</h3>
    </BasicWeatherContainer>
  );
};

export default BasicWeather;
