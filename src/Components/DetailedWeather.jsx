import React from "react";
import styled from "styled-components";

const DetailedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HighLowTempInfo = styled.div`
  display: flex;
`;

const WindInfo = styled.div`
  display: flex;
`;

const HumdidityInfo = styled.div`
  display: flex;
`;

const PressureInfo = styled.div`
  display: flex;
`;

const DetailedWeather = ({ weatherForecast }) => {
  return (
    <DetailedWeatherContainer>
      <p>Feels like {weatherForecast.current.feels_like}</p>
      <HighLowTempInfo>
        <p>Coldest {weatherForecast.daily[0].temp.min}</p>
        <p>Hottest {weatherForecast.daily[0].temp.max}</p>
      </HighLowTempInfo>
      <WindInfo>
        <p>Icon</p> <p>Wind</p> <p>{weatherForecast.daily[0].wind_speed}</p>
      </WindInfo>
      <HumdidityInfo>
        <p>Icon</p>
        <p>Humidity</p>
        <p>{weatherForecast.daily[0].humidity}</p>
      </HumdidityInfo>
      <PressureInfo>
        <p>Icon</p>
        <p>Pressure</p>
        <p>{weatherForecast.daily[0].pressure}</p>
      </PressureInfo>
    </DetailedWeatherContainer>
  );
};

export default DetailedWeather;
