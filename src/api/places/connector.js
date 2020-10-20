import { createConnector } from "react-instantsearch-dom";

export default createConnector({
  displayName: "AlgoliaPlaces",

  getProvidedProps() {
    return {};
  },

  refine(props, searchState, nextValue) {
    return {
      ...searchState,
      aroundLatLng: nextValue,
      boundingBox: {},
    };
  },

  getSearchParameters(searchParameters) {
    return searchParameters.setQueryParameter("aroundLatLngViaIP");
  },
});
