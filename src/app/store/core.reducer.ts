import * as coreActions from './core.actions';

export interface State {
  toggleCheckboxView: boolean;
  toggleCheckboxState: boolean;
}

export const INIT_STATE: State = {
  toggleCheckboxView: true,
  toggleCheckboxState: false,
};

export function coreReducer(state: State = INIT_STATE, actions: coreActions.Actions): State {
  switch (actions.type) {
    case coreActions.ON_TOGGLE_CHECKBOX_VIEW:
      return { ...state, toggleCheckboxView: !state.toggleCheckboxView };
    case coreActions.ON_TOGGLE_CHECKBOX_STATE:
      return { ...state, toggleCheckboxState: actions.payload };
    default:
      return state;
  }
}

export const getToggleCheckboxView = (state: State): boolean => state.toggleCheckboxView;
export const getToggleCheckboxState = (state: State): boolean => state.toggleCheckboxState;
