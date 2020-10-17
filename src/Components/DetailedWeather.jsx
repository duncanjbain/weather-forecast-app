import React from "react";
import styled from "styled-components";
import { ReactComponent as HumiditySvg } from "../assets/svg/weather/humidity.svg";
import { ReactComponent as WindSockSvg } from "../assets/svg/weather/wind_sock.svg";
import { ReactComponent as HotThermoSvg } from "../assets/svg/weather/thermometer_hot.svg";
import { ReactComponent as ColdThermoSvg } from "../assets/svg/weather/thermometer_cold.svg";
import { ReactComponent as ThermometerSvg } from "../assets/svg/weather/thermometer.svg";

const DetailedWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeelsLikeInfo = styled.div`
  display: flex;
`;

const ThermometerIcon = styled(ThermometerSvg)`
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

const WindSockIcon = styled(WindSockSvg)`
  height: 2rem;
  width: auto;
`;

const HumdidityInfo = styled.div`
  display: flex;
`;

const HumidityIcon = styled(HumiditySvg)`
  height: 2rem;
  width: auto;
`;

const DetailedWeather = ({ weatherForecast }) => {
  return (
    <DetailedWeatherContainer>
      <FeelsLikeInfo>
        <ThermometerIcon />{" "}
        <p>Feels like {weatherForecast.current.feels_like}</p>
      </FeelsLikeInfo>
      <HighLowTempInfo>
        <HotThermoIcon /> <p>Hottest {weatherForecast.daily[0].temp.max}</p>
        <ColdThermoIcon /> <p>Coldest {weatherForecast.daily[0].temp.min}</p>
      </HighLowTempInfo>
      <WindInfo>
        <WindSockIcon />
        <p>Wind</p>
        <p>{weatherForecast.daily[0].wind_speed}</p>
      </WindInfo>
      <HumdidityInfo>
        <HumidityIcon />
        <p>Humidity</p>
        <p>{weatherForecast.daily[0].humidity}</p>
      </HumdidityInfo>
    </DetailedWeatherContainer>
  );
};

export default DetailedWeather;
