import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIconSvg } from "../assets/svg/search.svg";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import Places from "./Places";

const searchClient = algoliasearch(
  "latency",
  "6be0576ff61c053d5f9a3225e2a90f76"
);

const SearchContainer = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.4rem;
  border-radius: 26px;
  display: flex;
  align-items: center;
  height: 3.25rem;
  position: relative;
`;

const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.5rem;
  height: 1.5rem;
  width: auto;
`;

const LocationSearch = ({
  locationSearchInput,
  updateLocationInput,
  clearLocationInput,
  setLocationLatLong,
}) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <InstantSearch indexName="city" searchClient={searchClient}>
        <Places
          updateLocationInput={updateLocationInput}
          setLocationLatLong={setLocationLatLong}
        />
      </InstantSearch>
    </SearchContainer>
  );
};

export default LocationSearch;
