import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName } from './account.reducer';

const getState = createFeatureSelector<State>(featureName);
// export const getLoading = createSelector(getState, state => state.name);
export const getName = createSelector(getState, (state) => state.name);
