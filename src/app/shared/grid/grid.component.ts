import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { YoutubeApiService } from '../services/youtube-api.service';
import { GridImgComponent } from './grid-img/grid-img.component';
import { GridCheckboxComponent } from './grid-checkbox/grid-checkbox.component';
import 'ag-grid-enterprise';

import { mockData } from './mockData';
import { AgGridAngular } from 'ag-grid-angular';
import { GridCountBarComponent } from './grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox/grid-header-checkbox.component';

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

  rowSelection = 'multiple';

  columnDefs = [
    {
      headerName: 'Athlete',
      field: 'athlete',
      minWidth: 180,
      // headerCheckboxSelection: true,
      // headerCheckboxSelectionFilteredOnly: true,
      // checkboxSelection: true,
    },
    {
      field: 'thumbnails',
      headerName: 'image',
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
    headerCheckboxSelection: this.isFirstColumn,
    checkboxSelection: this.isFirstColumn,
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

  constructor(private apiService: YoutubeApiService) {}

  ngOnInit(): void {
    this.isFullWidthCell = function (rowNode: any) {
      return this.isFullWidth(rowNode.data);
    };

    this.frameworkComponents = {
      checkboxRenderer: GridCheckboxComponent,
      statusBarComponent: GridCountBarComponent,
      clickableStatusBarComponent: GridToggleButtonComponent,
      agColumnHeader: GridHeaderCheckboxComponent,
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

  isFullWidth(data: { name: string }): boolean {
    return ['Peru', 'France', 'Italy'].indexOf(data.name) >= 0;
  }

  onGridReady(params: any): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  isFirstColumn(params: any): any {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    const thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

  showCountCheckedRows(): void {
    // this.agGrid?.api.
  }
}
