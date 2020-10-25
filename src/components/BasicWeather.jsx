import React from "react";
import styled from "styled-components";
import CelsiusFahrenheit from "./CelsiusFahrenheit"

const BasicWeatherContainer = styled.div`
  display: flex;
`;

const CurrentTemperature = styled.h2`
font-size: 4rem;
`;

const BasicWeather = ({ weatherForecast, locationName }) => {
  return (
    <BasicWeatherContainer>
      <CurrentTemperature>{weatherForecast.current.temp}</CurrentTemperature>
      <CelsiusFahrenheit />
    </BasicWeatherContainer>
  );
};

export default BasicWeather;
