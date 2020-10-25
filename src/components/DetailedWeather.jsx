import React from "react";
import styled from "styled-components";
import { ReactComponent as SunsetSvg } from "../assets/svg/weather/sunset.svg";
import { ReactComponent as SunriseSvg } from "../assets/svg/weather/sunrise.svg";
import { ReactComponent as WindSvg } from "../assets/svg/weather/wind.svg";
import { ReactComponent as RaindropSvg } from "../assets/svg/weather/raindrop.svg";
import { ReactComponent as CloudsunSvg } from "../assets/svg/weather/cloudsun.svg";

const DetailedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InfoContainer = styled.div`
  display: flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const SunsetSvgIcon = styled(SunsetSvg)`
  width: 2.5rem;
  height: auto;
  margin-right: 0.5rem;
`;

const SunriseSvgIcon = styled(SunriseSvg)`
  width: 2.5rem;
  height: auto;
  margin-right: 0.5rem;
`;

const WindSvgIcon = styled(WindSvg)`
  width: 2.5rem;
  height: auto;
  margin-right: 0.5rem;
`;
const RaindropSvgIcon = styled(RaindropSvg)`
  width: 2.5rem;
  height: auto;
  margin-right: 0.5rem;
`;

const CloudsunSvgIcon = styled(CloudsunSvg)`
  width: 2.5rem;
  height: auto;
  margin-right: 0.5rem;
`;

const WeatherInfo = styled.p`
  align-self: center;
`;

const DetailedWeather = ({ weatherForecast }) => {

  const utcToHHMM = time => {
    const addZero = time => {
      if (time < 10) {
        time = "0" + time;
      }
      return time;
          }

    const utcTime = new Date(time*1e3)
    const timeHour = addZero(utcTime.getHours());
    const timeMinutes = addZero(utcTime.getMinutes());
    return `${timeHour}:${timeMinutes}`
  }
  return (
    <DetailedWeatherContainer>
      <InfoContainer>
        <CloudsunSvgIcon />
        <WeatherInfo>Clouds {weatherForecast.current.clouds}%</WeatherInfo>
      </InfoContainer>
      <InfoContainer>
        <RaindropSvgIcon />
        <WeatherInfo>Humidity {weatherForecast.current.humidity}%</WeatherInfo>
      </InfoContainer>
      <InfoContainer>
        <WindSvgIcon />
        <WeatherInfo>Wind {weatherForecast.current.wind_speed} m/s</WeatherInfo>
      </InfoContainer>
      <InfoContainer>
        <SunriseSvgIcon />
        <WeatherInfo>Sunrise {utcToHHMM(weatherForecast.current.sunrise)}</WeatherInfo>
      </InfoContainer>
      <InfoContainer>
        <SunsetSvgIcon />
        <WeatherInfo>Sunset {utcToHHMM(weatherForecast.current.sunset)}</WeatherInfo>
      </InfoContainer>
    </DetailedWeatherContainer>
  );
};

export default DetailedWeather;
