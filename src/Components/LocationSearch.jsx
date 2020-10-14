import React from "react";
import styled from "styled-components";

const LocationInput = styled.input`
`;

const LocationSearch = ({locationSearchInput, updateLocationInput, clearLocationInput}) => {
    return (
        <LocationInput onChange={updateLocationInput} value={locationSearchInput} placeholder="Enter your location..." />
    )
}

export default LocationSearch;