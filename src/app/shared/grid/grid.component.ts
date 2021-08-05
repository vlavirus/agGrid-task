import { Component, OnDestroy, OnInit, Self } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'ag-grid-enterprise';
import { GetContextMenuItemsParams } from '@ag-grid-community/core';

import { GridApi } from 'ag-grid-community/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid-community/dist/lib/columnController/columnApi';
import { takeUntil } from 'rxjs/operators';
import { YoutubeApiService } from '../services/youtube-api.service';

import { GridCountBarComponent } from './grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './grid-toggle-button/grid-toggle-button.component';
import { ApiTransformDataModel } from '../models/api-transform-data.model';
import { columnDefsConst, defaultColDefConst, statusBarConst } from './grid.constant';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [GridService],
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

  public columnDefs = columnDefsConst;

  public defaultColDef = defaultColDefConst;

  public statusBar = statusBarConst;

  public options = {
    applyColumnDefOrder: true,
  };

  public rowData$: Observable<ApiTransformDataModel[]> | undefined;

  constructor(private apiService: YoutubeApiService, @Self() private gridService: GridService) {}

  ngOnInit(): void {
    this.gridService
      .getToggleCheckboxView()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((res) =>
        res ? (this.columnDefs = columnDefsConst) : (this.columnDefs = this.columnDefs.slice(1)),
      );

    this.rowData$ = this.gridService.getRowData();
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSelectionChanged(params: any): void {
    this.gridService.selectionChanged(params);
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

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
