import React from "react";
import styled from "styled-components";
import BasicWeather from "./BasicWeather";
import DetailedWeather from "./DetailedWeather";
import WeeklyWeather from "./WeeklyWeather";

const CurrentWeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  margin-bottom: 1rem;
`;

const CurrentWeatherHeaderContainer = styled.header`
  display: flex;
`;

const WeeklyWeatherContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 13px;
  margin-bottom: 1rem;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BasicWeatherInfoContainer = styled.div`
display: flex;
flex-direction: column;
`;

const LocationName = styled.h3`
  font-size: 2rem;
  padding-right: 2rem;
`;

const CurrentWeather = ({ weatherForecast, locationName }) => {
  const currentForecastTime = (time) => {
    const utcTime = new Date(time);
    const currentForecastHour = utcTime.getHours();
    const currentForecastMinutes = utcTime.getMinutes();
    return `${currentForecastHour}:${currentForecastMinutes}`;
  };

  const currentForecastWeekday = (s) =>
    new Date(s * 1e3).toLocaleString("en-us", { weekday: "long" });

  const currentForecastDayofMonth = (s) => new Date(s * 1e3).getUTCDate();

  const currentForecastMonth = (s) =>
    new Date(s * 1e3).toLocaleString("en-us", { month: "long" });

  return (
    <>
      <CurrentWeatherContainer>
        <CurrentWeatherHeaderContainer>
          <LocationName>{locationName}</LocationName>
        </CurrentWeatherHeaderContainer>
        <WeatherInfoContainer>
          <BasicWeatherInfoContainer>
            <LocationName>
              {currentForecastTime(weatherForecast.current.dt)}
            </LocationName>
            <LocationName>
              {currentForecastWeekday(weatherForecast.current.dt)},{" "}
              {currentForecastMonth(weatherForecast.current.dt)}{" "}
              {currentForecastDayofMonth(weatherForecast.current.dt)}
            </LocationName>

            <BasicWeather
              weatherForecast={weatherForecast}
              locationName={locationName}
            />
          </BasicWeatherInfoContainer>
          <DetailedWeather
            weatherForecast={weatherForecast}
            locationName={weatherForecast}
          />
        </WeatherInfoContainer>
      </CurrentWeatherContainer>
      <WeeklyWeatherContainer>
        <WeeklyWeather dailyForecast={weatherForecast.daily} />
      </WeeklyWeatherContainer>
    </>
  );
};

export default CurrentWeather;
