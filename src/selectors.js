import { createSelector } from 'reselect';

export const getUser = (state) => state.credentials;
// export const getInputValue = (state) => state.inputValue;
// export const getSelectedNamesIDs = (state) => state.selectedNamesIDs;

//RESELECTOR - library, Memoization - process (get only fragment of Redux state for our components)
// export const getFilteredNames = createSelector([getNames, getInputValue, getSelectedNamesIDs],
//      (analytics, inputValue, selectedNamesIDs) =>
//      {
//         const filteredNamesByInput = analytics.filter((obj) => obj.name.toLowerCase()
//              .search(inputValue.toLowerCase()) !== -1);
//         return filteredNamesByInput.filter(({id}) => !selectedNamesIDs.includes(id));
//      });



