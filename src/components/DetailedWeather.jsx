import React from "react";
import styled from "styled-components";
import { ReactComponent as SunsetSvg } from "../assets/svg/weather/sunset.svg"
import { ReactComponent as SunriseSvg } from "../assets/svg/weather/sunrise.svg"
import { ReactComponent as WindSvg } from "../assets/svg/weather/wind.svg"
import { ReactComponent as RaindropSvg } from "../assets/svg/weather/raindrop.svg"
import { ReactComponent as CloudsunSvg } from "../assets/svg/weather/cloudsun.svg"

const DetailedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const IconImg = styled.img`
`;

const SunsetSvgIcon = styled(SunsetSvg)`
  width: 2.5rem;
  height: auto;
`;

const SunriseSvgIcon = styled(SunriseSvg)`
  width: 2.5rem;
  height: auto;
`;

const WindSvgIcon = styled(WindSvg)`
  width: 2.5rem;
  height: auto;
`;
const RaindropSvgIcon = styled(RaindropSvg)`
  width: 2.5rem;
  height: auto;
`;

const CloudsunSvgIcon = styled(CloudsunSvg)`
  width: 2.5rem;
  height: auto;
`;

const DetailedWeather = ({ weatherForecast }) => {
  return (
    <DetailedWeatherContainer>
      <div style={{display: "flex"}}>
        <CloudsunSvgIcon /><p>Clouds {weatherForecast.current.clouds}%</p>
      </div>
      <div style={{display: "flex"}}>
        <RaindropSvgIcon /><p>Humidity {weatherForecast.current.humidity}%</p>
      </div>
      <div style={{display: "flex"}}>
        <WindSvgIcon /><p>Wind {weatherForecast.current.wind_speed} m/s</p>
      </div>
      <div style={{display: "flex"}}>
        <SunriseSvgIcon /><p>Sunrise{weatherForecast.current.sunrise}</p>
      </div>
      <div style={{display: "flex"}}>
      <SunsetSvgIcon /><p>Sunset {weatherForecast.current.sunset}</p>
      </div>
    </DetailedWeatherContainer>
  );
};

export default DetailedWeather;
