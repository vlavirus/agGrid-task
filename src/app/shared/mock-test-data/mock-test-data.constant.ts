export const mockGridRowParams = {
  api: {
    getDisplayedRowCount: () => 50,
    getSelectedRows: () => new Array(50),
  },
};

export const mockGridApiParams = {
  api: {
    selectAll: () => 50,
    deselectAll: () => new Array(50),
  }
};

export const mockGridItem = {
  thumbnails: 'test',
  publishedAt: new Date(),
  title: 'test',
  description: 'test',
  videoId: 'test',
};

export const defaultMockStore = {
  initialState: {
    core: {
      toggleCheckboxView: true,
      gridItems: [mockGridItem],
      toggleCheckboxState: false,
    }
  }
};

export const mockApiContextMenuItems = [
  'copy',
  'copyWithHeaders',
  'paste',
  'separator',
  'export'
];

export const mockGridContextMenu = {
  node: {
    data: {
      videoId: 'test2'
    }
  },
  column: {
    getColId: () => 2,
  },
  defaultItems: mockApiContextMenuItems
};

export class GridServiceStub {
  selectionChanged = () => {};
  getRowData = () => {};
  getToggleCheckboxView = () => {};
}
