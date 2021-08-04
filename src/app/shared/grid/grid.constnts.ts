import { ICellRendererParams } from '@ag-grid-community/core';
import { GridHeaderCheckboxComponent } from './grid-header-checkbox/grid-header-checkbox.component';
import { GridImgComponent } from './grid-img/grid-img.component';

export const statusBarConst = {
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

export const defaultColDefConst = {
  flex: 1,
  minWidth: 100,
  resizable: true,
};

export const optionsConst = {
  applyColumnDefOrder: true,
};

export const checkBoxConst = {
  field: 'toggle-checkbox',
  headerComponentFramework: GridHeaderCheckboxComponent,
  checkboxSelection: true,
};

export const columnDefsConst = [
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
