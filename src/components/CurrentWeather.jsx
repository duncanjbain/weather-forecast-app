import React from "react";
import styled from "styled-components";
import BasicWeather from "./BasicWeather";
import DetailedWeather from "./DetailedWeather";
import WeeklyWeather from "./WeeklyWeather"

const CurrentWeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
`;

const CurrentWeatherHeader = styled.header``;

const CurrentWeatherHeading = styled.h2``;

const WeatherInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CurrentWeather = ({ weatherForecast, locationName }) => {
  return (
    <CurrentWeatherContainer>
      <CurrentWeatherHeader>
        <CurrentWeatherHeading>Current Weather</CurrentWeatherHeading>
      </CurrentWeatherHeader>
      <WeatherInfoContainer>
        <BasicWeather weatherForecast={weatherForecast} locationName={locationName}/>
        <DetailedWeather weatherForecast={weatherForecast} />
      </WeatherInfoContainer>
      <WeeklyWeather dailyForecast={weatherForecast.daily} />
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
