import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../assets/svg/search.svg";
import { ReactComponent as PointerIconSvg } from "../assets/svg/pointer.svg";

const SearchContainer = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  border-radius: 26px;
  display: flex;
  align-items: center;
  height: 3.25rem;
  position: relative;
`;

const LocationInput = styled.input`
  flex: 1;
  margin-left: 2rem;
  margin-right: 2rem;
  height: 3rem;
  border: none;
  font-size: 1.125rem;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(SearchIconSvg)`
  margin-left: 2rem;
  height: 2rem;
  width: auto;
`;

const PointerIcon = styled(PointerIconSvg)`
  margin-right: 2rem;
  height: 2rem;
  width: auto;
`;

const CurrentLocatonButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  height: 100%;
  display: contents;
`;

const LocationSearch = ({
  locationSearchInput,
  updateLocationInput,
  clearLocationInput,
}) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <LocationInput
        onChange={updateLocationInput}
        value={locationSearchInput}
        placeholder="Enter your location..."
      />
      <CurrentLocatonButton>
        <PointerIcon />
      </CurrentLocatonButton>
    </SearchContainer>
  );
};

export default LocationSearch;
