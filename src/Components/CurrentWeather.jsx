import React from "react";
import styled from "styled-components";

const CurrentWeatherContainer = styled.section`
display: flex;
flex-direction: column;
padding: 1rem 1.5rem;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
border-radius: 13px;
`;

const CurrentWeatherHeader = styled.header`
`;

const CurrentWeatherHeading = styled.h2`
`;

const CurrentWeather = () => {
  return(
    <CurrentWeatherContainer>
      <CurrentWeatherHeader>
        <CurrentWeatherHeading>
          Current Weather
        </CurrentWeatherHeading>

      </CurrentWeatherHeader>
    </CurrentWeatherContainer>
  );
};

export default CurrentWeather;
