import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SetOnToggleCheckboxState } from '../../store/core.actions';
import { getGridItems, getToggleCheckboxView, State } from '../../store';
import { ApiTransformDataModel } from '../models/api-transform-data.model';

@Injectable()
export class GridService {
  constructor(private store: Store<State>) {}

  selectionChanged(params: any): void {
    params.api.getDisplayedRowCount() !== params.api.getSelectedRows().length
      ? this.store.dispatch(new SetOnToggleCheckboxState(false))
      : this.store.dispatch(new SetOnToggleCheckboxState(true));
  }

  getRowData(): Observable<ApiTransformDataModel[]> {
    return this.store.select(getGridItems);
  }

  getToggleCheckboxView(): Observable<boolean> {
    return this.store.select(getToggleCheckboxView);
  }
}
