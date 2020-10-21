import React from "react";
import styled from "styled-components";
import DailyWeatherCard from "./DailyWeatherCard"

const WeeklyWeatherContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const WeeklyWeather = ({ dailyForecast }) => {
    const fiveDays = dailyForecast.slice(0,5);
    return (
        <WeeklyWeatherContainer>
            {fiveDays.map(day => (
                <DailyWeatherCard key={day.dt} dayForecast={day} />
            ))}
        </WeeklyWeatherContainer>
    )
}

export default WeeklyWeather;