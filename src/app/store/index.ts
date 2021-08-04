import { createSelector } from '@ngrx/store';
import * as fromCore from './core.reducer';

export interface State {
  core: fromCore.State;
}

export const reducers = {
  core: fromCore.coreReducer,
};

export const getCoreState = (state: State) => state.core;

export const getToggleCheckboxView = createSelector(getCoreState, fromCore.getToggleCheckboxView);
export const getToggleCheckboxState = createSelector(getCoreState, fromCore.getToggleCheckboxState);
export const getGridItems = createSelector(getCoreState, fromCore.getGridItems);
