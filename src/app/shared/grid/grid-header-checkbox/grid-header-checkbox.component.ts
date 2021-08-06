import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';

import { State, getToggleCheckboxState } from 'src/app/store';
import { SetOnToggleCheckboxState } from 'src/app/store/core.actions';

@Component({
  selector: 'app-grid-header-checkbox',
  templateUrl: './grid-header-checkbox.component.html',
  styleUrls: ['./grid-header-checkbox.component.scss'],
})
export class GridHeaderCheckboxComponent implements OnInit, OnDestroy {
  public params!: IStatusPanelParams;

  public checkboxState = false;

  private ngUnsubscribe$ = new Subject<void>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(getToggleCheckboxState)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((res) => {
        this.checkboxState = res;
      });
  }

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  fieldsChange(values: boolean): void {
    this.onToggleCheckboxState(values);
    values ? this.params?.api.selectAll() : this.params?.api.deselectAll();
  }

  onToggleCheckboxState(values: boolean): void {
    this.store.dispatch(new SetOnToggleCheckboxState(values));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
