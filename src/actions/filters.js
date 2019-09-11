import { FILTERS_ON_CHANGE } from "./../constants";

export function onFilterChange(timePeriod, keyword) {
  return {
    type: FILTERS_ON_CHANGE,
    timePeriod,
    keyword
  };
}
