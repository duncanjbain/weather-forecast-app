import React from "react";
import styled from "styled-components"

const DayCardContainer = styled.div`
    display:flex;
    flex-direction: column;
`

const DailyWeatherCard = ({ dayForecast }) => {
    const time = s => new Date(s * 1e3).toLocaleString('en-us', {  weekday: 'long' })
    return (
        <DayCardContainer>
            <h3>{time(dayForecast.dt)}</h3>
            <p>{dayForecast.weather[0].main}</p>
            <p>Hi: {dayForecast.temp.max}</p>
            <p>Lo: {dayForecast.temp.min}</p>
        </DayCardContainer>
    )
}

export default DailyWeatherCard;