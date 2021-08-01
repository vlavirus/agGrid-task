import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import 'ag-grid-enterprise';
import { Store } from '@ngrx/store';

import { AgGridAngular } from 'ag-grid-angular';

import { YoutubeApiService } from '../services/youtube-api.service';
import { mockData } from './mockData';
import { GridImgComponent } from './grid-img/grid-img.component';
import { GridCountBarComponent } from './grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox/grid-header-checkbox.component';
import { getToggleCheckbox, State } from '../../store';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  frameworkComponents: any;

  @ViewChild('agGrid') agGrid: AgGridAngular | undefined;

  public gridApi: any;

  public gridColumnApi: any;

  private onToggleCheckBox$: Observable<boolean> | undefined;

  rowSelection = 'multiple';

  toggleCheckboxColumn = true;

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
      cellRenderer: (params: any) => {
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

  public isFullWidthCell: any;

  public fullWidthCellRenderer: any;

  rowData$: Observable<any[]> | undefined;

  constructor(private apiService: YoutubeApiService, private store: Store<State>) {}

  ngOnInit(): void {
    this.onToggleCheckBox$ = this.store.select(getToggleCheckbox);
    this.onToggleCheckBox$.subscribe((res) => {
      // @ts-ignore
      res ? (this.columnDefs = [this.checkBox, ...this.columnDefs])
        : (this.columnDefs = this.columnDefs.slice(1));
    });

    this.frameworkComponents = {
      statusBarComponent: GridCountBarComponent,
      clickableStatusBarComponent: GridToggleButtonComponent,
    };

    this.fullWidthCellRenderer = 'fullWidthCellRenderer';
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
    );
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
