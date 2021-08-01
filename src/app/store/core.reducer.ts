import * as coreActions from './core.actions';

export interface State {
  toggleCheckbox: boolean;
}

export const INIT_STATE: State = {
  toggleCheckbox: true,
};

export function coreReducer(state: State = INIT_STATE, actions: coreActions.Actions): State {
  switch (actions.type) {
    case coreActions.ON_TOGGLE_CHECKBOX:
      return { ...state, toggleCheckbox: !state.toggleCheckbox };
    default:
      return state;
  }
}

export const getToggleCheckbox = (state: State): boolean => state.toggleCheckbox;
