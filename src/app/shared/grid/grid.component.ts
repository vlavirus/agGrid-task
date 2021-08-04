import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'ag-grid-enterprise';
import { Store } from '@ngrx/store';
import { GetContextMenuItemsParams } from '@ag-grid-community/core';

import { GridApi } from 'ag-grid-community/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid-community/dist/lib/columnController/columnApi';
import { getGridItems, getToggleCheckboxView, State } from 'src/app/store';
import { SetOnToggleCheckboxState } from 'src/app/store/core.actions';
import { takeUntil } from 'rxjs/operators';
import { YoutubeApiService } from '../services/youtube-api.service';

import { GridCountBarComponent } from './grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './grid-toggle-button/grid-toggle-button.component';
import { ApiTransformDataModel } from '../models/api-transform-data.model';
import {
  checkBoxConst,
  columnDefsConst,
  defaultColDefConst,
  statusBarConst,
} from './grid.constnts';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit, OnDestroy {
  public gridApi: GridApi | undefined;

  public gridColumnApi: ColumnApi | undefined;

  private ngUnsubscribe$ = new Subject<void>();

  public frameworkComponents = {
    statusBarComponent: GridCountBarComponent,
    clickableStatusBarComponent: GridToggleButtonComponent,
  };

  public rowSelection = 'multiple';

  private checkBox = checkBoxConst;

  public columnDefs = columnDefsConst;

  public defaultColDef = defaultColDefConst;

  public statusBar = statusBarConst;

  public options = {
    applyColumnDefOrder: true,
  };

  public rowData$: Observable<ApiTransformDataModel[]> | undefined;

  constructor(private apiService: YoutubeApiService, private store: Store<State>) {}

  ngOnInit(): void {
    this.store
      .select(getToggleCheckboxView)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((res) => {
        // @ts-ignore
        res ? (this.columnDefs = [this.checkBox, ...this.columnDefs])
          : (this.columnDefs = this.columnDefs.slice(1));
      });

    this.rowData$ = this.store.select(getGridItems);
  }

  getContextMenuItems(params: GetContextMenuItemsParams): object | undefined {
    const { videoId } = params.node.data;
    const colId = params.column.getColId();

    const videoTitleItems = [
      'copy',
      'copyWithHeaders',
      'paste',
      'separator',
      'export',
      {
        name: 'Open in new tab',
        action: () => {
          window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        },
      },
    ];

    return colId === 'title' ? videoTitleItems : params.defaultItems;
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  selectionChanged(params: any): void {
    params.api.getDisplayedRowCount() !== params.api.getSelectedRows().length
      ? this.store.dispatch(new SetOnToggleCheckboxState(false))
      : this.store.dispatch(new SetOnToggleCheckboxState(true));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
