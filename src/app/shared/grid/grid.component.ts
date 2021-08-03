import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import 'ag-grid-enterprise';
import { Store } from '@ngrx/store';
import {GetContextMenuItemsParams, ICellRendererParams} from '@ag-grid-community/core';

import { GridApi } from 'ag-grid-community/dist/lib/gridApi';
import { ColumnApi } from 'ag-grid-community/dist/lib/columnController/columnApi';
import { getToggleCheckboxView, State } from 'src/app/store';
import { SetOnToggleCheckboxState } from 'src/app/store/core.actions';
import { YoutubeApiService } from '../services/youtube-api.service';
import { mockData } from './mockData';
import { GridImgComponent } from './grid-img/grid-img.component';
import { GridCountBarComponent } from './grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox/grid-header-checkbox.component';
import { YoutubeDataPipe } from '../pipes/youtube-data.pipe';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public gridApi: GridApi | undefined;

  public gridColumnApi: ColumnApi | undefined;

  public frameworkComponents = {
    statusBarComponent: GridCountBarComponent,
    clickableStatusBarComponent: GridToggleButtonComponent,
  };

  public rowSelection = 'multiple';

  private onToggleCheckBox$: Observable<boolean> | undefined;

  checkBox = {
    field: 'toggle-checkbox',
    headerComponentFramework: GridHeaderCheckboxComponent,
    checkboxSelection: true,
  };

  columnDefs = [
    {
      field: 'thumbnails',
      headerName: '',
      width: 'fit-content',
      sortable: false,
      autoHeight: true,
      cellRendererFramework: GridImgComponent,
    },
    { field: 'publishedAt', headerName: 'Published on' },
    {
      field: 'title',
      headerName: 'Video Title',
      cellRenderer: (params: ICellRendererParams) => {
        const { title } = params.data;
        const { videoId } = params.data;
        const newLink = `<a href= https://www.youtube.com/watch?v=${videoId} target="_blank">${title}</a>`;
        return newLink;
      },
    },
    { field: 'description', headerName: 'Description' },
  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'left',
      },
      {
        statusPanel: 'statusBarComponent',
        key: 'statusBarCompKey',
        align: 'left',
      },
      {
        statusPanel: 'clickableStatusBarComponent',
        align: 'right',
      },
    ],
  };

  options = {
    applyColumnDefOrder: true,
  };

  rowData$: Observable<any[]> | undefined;

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
    }];

    return colId === 'title' ? videoTitleItems : params.defaultItems;
  }

  constructor(private apiService: YoutubeApiService, private store: Store<State>) {}

  ngOnInit(): void {
    this.onToggleCheckBox$ = this.store.select(getToggleCheckboxView);
    this.onToggleCheckBox$.subscribe((res) => {
      // @ts-ignore
      res ? (this.columnDefs = [this.checkBox, ...this.columnDefs])
        : (this.columnDefs = this.columnDefs.slice(1));
    });

    this.frameworkComponents = {
      statusBarComponent: GridCountBarComponent,
      clickableStatusBarComponent: GridToggleButtonComponent,
    };

    // this.rowData$ = this.apiService.getData()
    this.rowData$ = of(mockData).pipe(
      map((res) =>
        res.items.map((item: any) => {
          return {
            thumbnails: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            title: item.snippet.title,
            description: item.snippet.description,
            videoId: item.id.videoId,
          };
        }),
      ),
      // YoutubeDataPipe()
    );
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
}
