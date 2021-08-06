import { Action } from '@ngrx/store';
import { ApiTransformDataModel } from '../shared/models/api-transform-data.model';

export const ON_TOGGLE_CHECKBOX_VIEW = '[Core]On toggle checkbox view';
export const ON_TOGGLE_CHECKBOX_STATE = '[Core]On toggle checkbox state';
export const LOAD_GRID_ITEMS = '[Core]Load grid items';
export const LOAD_GRID_ITEMS_SUCCESS = '[Core]Load grid items success';

export class SetOnToggleCheckboxView implements Action {
  readonly type = ON_TOGGLE_CHECKBOX_VIEW;
}

export class SetOnToggleCheckboxState implements Action {
  readonly type = ON_TOGGLE_CHECKBOX_STATE;

  constructor(public payload: boolean) {}
}

export class LoadGridItems implements Action {
  readonly type = LOAD_GRID_ITEMS;
}
export class LoadGridItemsSuccess implements Action {
  readonly type = LOAD_GRID_ITEMS_SUCCESS;

  constructor(public payload: ApiTransformDataModel[]) {}
}

export type Actions =
  | SetOnToggleCheckboxView
  | SetOnToggleCheckboxState
  | LoadGridItems
  | LoadGridItemsSuccess;
