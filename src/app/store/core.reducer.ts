import * as coreActions from './core.actions';
import { LOAD_GRID_ITEMS_FAIL, LOAD_GRID_ITEMS_SUCCESS } from './core.actions';
import { ApiTransformDataModel } from '../shared/models/api-transform-data.model';

export interface State {
  toggleCheckboxView: boolean;
  gridItems: ApiTransformDataModel[];
  toggleCheckboxState: boolean;
}

export const INIT_STATE: State = {
  toggleCheckboxView: true,
  gridItems: [],
  toggleCheckboxState: false,
};

export function coreReducer(state: State = INIT_STATE, actions: coreActions.Actions): State {
  switch (actions.type) {
    case coreActions.ON_TOGGLE_CHECKBOX_VIEW:
      return { ...state, toggleCheckboxView: !state.toggleCheckboxView } as State;
    case coreActions.ON_TOGGLE_CHECKBOX_STATE:
      return { ...state, toggleCheckboxState: actions.payload } as State;
    case coreActions.LOAD_GRID_ITEMS_SUCCESS:
      return { ...state, gridItems: actions.payload } as State;
    case LOAD_GRID_ITEMS_FAIL:
      return { ...state } as State;
    default:
      return state;
  }
}

export const getToggleCheckboxView = (state: State): boolean => state.toggleCheckboxView;
export const getToggleCheckboxState = (state: State): boolean => state.toggleCheckboxState;
export const getGridItems = (state: State): ApiTransformDataModel[] => state.gridItems;
