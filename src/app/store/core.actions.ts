import { Action } from '@ngrx/store';

export const ON_TOGGLE_CHECKBOX_VIEW = '[Core]On toggle checkbox view';
export const ON_TOGGLE_CHECKBOX_STATE = '[Core]On toggle checkbox state';

export class SetOnToggleCheckboxView implements Action {
  readonly type = ON_TOGGLE_CHECKBOX_VIEW;
}

export class SetOnToggleCheckboxState implements Action {
  readonly type = ON_TOGGLE_CHECKBOX_STATE;

  constructor(public payload: boolean) {}
}

export type Actions = SetOnToggleCheckboxView | SetOnToggleCheckboxState;
