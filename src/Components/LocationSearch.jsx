import React from "react";
import styled from "styled-components";

const LocationInput = styled.input`
`;

const LocationSearch = ({locationSearchInput, setlocationSearchInput}) => {
    return (
        <LocationInput onChange={setlocationSearchInput} value={locationSearchInput} />
    )
}

export default LocationSearch;