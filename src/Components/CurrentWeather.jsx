import React from "react";
import styled from "styled-components";

const CurrentWeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
`;

const CurrentWeatherHeader = styled.header``;

const WeatherInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BasicWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeatherIconTemperature = styled.div`
  display: flex;
`;

const CurrentWeatherHeading = styled.h2``;

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

const CurrentWeather = () => {
  return (
    <CurrentWeatherContainer>
      <CurrentWeatherHeader>
        <CurrentWeatherHeading>Current Weather</CurrentWeatherHeading>
      </CurrentWeatherHeader>
      <WeatherInfoContainer>
        <BasicWeatherContainer>
          <h3>CurrentLocation</h3>
          <WeatherIconTemperature>
            <p>Sunny</p>
            <p>23c</p>
          </WeatherIconTemperature>
          <h3>Mostly sunny</h3>
        </BasicWeatherContainer>
        <DetailedWeatherContainer>
          <p>Feels like 15c</p>
          <HighLowTempInfo>
            <p>Coldest 5c</p>
            <p>Hottest 20c</p>
          </HighLowTempInfo>
          <WindInfo>
            <p>Icon</p> <p>Wind</p> <p>25 mph</p>
          </WindInfo>
          <HumdidityInfo>
            <p>Icon</p>
            <p>Humidity</p>
            <p>75%</p>
          </HumdidityInfo>
          <PressureInfo>
            <p>Icon</p>
            <p>Pressure</p>
            <p>850mbar</p>
          </PressureInfo>
        </DetailedWeatherContainer>
      </WeatherInfoContainer>
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
