import { Action } from '@ngrx/store';

export const ON_TOGGLE_CHECKBOX = '[]On toggle checkbox';

export class SetOnToggleCheckbox implements Action {
  readonly type = ON_TOGGLE_CHECKBOX;
}

export type Actions = SetOnToggleCheckbox;
