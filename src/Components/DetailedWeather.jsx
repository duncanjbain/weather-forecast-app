import React from "react";
import styled from "styled-components";
import { ReactComponent as RainDropSvg } from "../assets/svg/weather/raindrop.svg";
import { ReactComponent as WindSvg } from "../assets/svg/weather/wind.svg";
import { ReactComponent as HotThermoSvg } from "../assets/svg/weather/thermometer_hot.svg";
import { ReactComponent as ColdThermoSvg } from "../assets/svg/weather/thermometer_cold.svg";
import { ReactComponent as ThermoSvg } from "../assets/svg/weather/thermometer.svg";

const DetailedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeelsLikeInfo = styled.div`
  display: flex;
`;

const FeelsLikeThermo = styled(ThermoSvg)`
  height: 2rem;
  width: auto;
`;

const HighLowTempInfo = styled.div`
  display: flex;
`;

const HotThermoIcon = styled(HotThermoSvg)`
  height: 2rem;
  width: auto;
`;

const ColdThermoIcon = styled(ColdThermoSvg)`
  height: 2rem;
  width: auto;
`;

const WindInfo = styled.div`
  display: flex;
`;

const WindIcon = styled(WindSvg)`
  height: 2rem;
  width: auto;
`;

const HumdidityInfo = styled.div`
  display: flex;
`;

const RainDropIcon = styled(RainDropSvg)`
  height: 2rem;
  width: auto;
`;

const DetailedWeather = ({ weatherForecast }) => {
  return (
    <DetailedWeatherContainer>
      <FeelsLikeInfo>
        <FeelsLikeThermo />{" "}
        <p>Feels like {weatherForecast.current.feels_like}</p>
      </FeelsLikeInfo>
      <HighLowTempInfo>
        <HotThermoIcon /> <p>Hottest {weatherForecast.daily[0].temp.max}</p>
        <ColdThermoIcon /> <p>Coldest {weatherForecast.daily[0].temp.min}</p>
      </HighLowTempInfo>
      <WindInfo>
        <WindIcon />
        <p>Wind</p>
        <p>{weatherForecast.daily[0].wind_speed}</p>
      </WindInfo>
      <HumdidityInfo>
        <RainDropIcon />
        <p>Humidity</p>
        <p>{weatherForecast.daily[0].humidity}</p>
      </HumdidityInfo>
    </DetailedWeatherContainer>
  );
};

export default DetailedWeather;
