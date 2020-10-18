import React, { Component } from "react";
import styled from "styled-components";

import places from "places.js"
import connect from "../api/places/connector"


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
    createRef = c => {this.element = c};

    componentDidMount() {
        const { refine, defaultRefinement, updateLocationInput, updateLatLong } = this.props

        const autocomplete = places({
            container: this.element,
        });

        autocomplete.on('change', event => {
            refine(event.suggestion.latlng);
            updateLocationInput(event.suggestion);
        });

        autocomplete.on('clear', () => {
            refine(defaultRefinement)
        });

        autocomplete.on('locate', () => {
            function getLatLong(position) {
                const latLong = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                updateLatLong(latLong)
              }
            navigator.geolocation.getCurrentPosition(getLatLong);
        })
    }

    render() {
        return(
                <LocationInput
                    ref={this.createRef}
                    type="search"
                    id="location-input"
                    placeholder="Search location..."
                />
        );
    };
}

export default connect(Places);