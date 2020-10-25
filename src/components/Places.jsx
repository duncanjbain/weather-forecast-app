import React, { Component } from "react";
import styled from "styled-components";

import places from "places.js";
import connect from "../services/placesConnector";
import fetchWeather from "../services/weatherApi";

const LocationInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 3rem;
  border: none;
  font-size: 1.125rem;
  &:focus {
    outline: none;
  }
`;

class Places extends Component {
  createRef = (c) => {
    this.element = c;
  };

  componentDidMount() {
    const {
      refine,
      setLocationLatLong,
      setLocationName,
      setWeatherForecast,
    } = this.props;

    const autocomplete = places({
      container: this.element,
      type: "city",
    });

    autocomplete.on("change", (event) => {
      refine(event.suggestion.latlng);
      setLocationLatLong(event.suggestion.latlng);
      setLocationName(event.suggestion.name);
      console.log(event.suggestion);
      localStorage.setItem("lat", event.suggestion.latlng.lat);
      localStorage.setItem("lng", event.suggestion.latlng.lng);
      fetchWeather(event.suggestion.latlng).then((forecast) => {
        setWeatherForecast(forecast);
      });
    });

    autocomplete.on("clear", () => {
      setLocationLatLong({});
      setWeatherForecast(false);
      localStorage.removeItem("latLng");
    });

    autocomplete.on("locate", () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocationLatLong(latLng);
        localStorage.setItem("lat", latLng.lat);
        localStorage.setItem("lng", latLng.lat);
        const placesApiUrl = `https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${position.coords.latitude},${position.coords.longitude}&hitsPerPage=1&language=en`;
        fetch(placesApiUrl)
          .then((response) => response.json())
          .then((data) => {
            setLocationName(
              `${data.hits[0].locale_names[0]}`

            );
          });
        fetchWeather({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }).then((forecast) => {
          setWeatherForecast(forecast);
        });
      });
    });
  }

  render() {
    return (
      <LocationInput
        ref={this.createRef}
        type="search"
        id="location-input"
        placeholder="Search location..."
      />
    );
  }
}

export default connect(Places);
