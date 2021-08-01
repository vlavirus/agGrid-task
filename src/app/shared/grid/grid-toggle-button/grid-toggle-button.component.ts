import { Component } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
import { Store } from '@ngrx/store';

import { SetOnToggleCheckbox } from 'src/app/store/core.actions';
import { State } from 'src/app/store/core.reducer';

@Component({
  selector: 'app-grid-toggle-button',
  templateUrl: './grid-toggle-button.component.html',
  styleUrls: ['./grid-toggle-button.component.scss'],
})
export class GridToggleButtonComponent {
  private params: IStatusPanelParams | undefined;

  constructor(private store: Store<State>) {}

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  onClick(): void {
    this.store.dispatch(new SetOnToggleCheckbox());
  }
}
