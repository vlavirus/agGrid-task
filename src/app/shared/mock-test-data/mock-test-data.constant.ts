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
  },
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
    },
  },
};

export const mockApiContextMenuItems = ['copy', 'copyWithHeaders', 'paste', 'separator', 'export'];

export const mockApiContextActionMenuItems = [
  'copy',
  'copyWithHeaders',
  'paste',
  'separator',
  'export',
  {
    name: 'Open in new tab',
    action: () => {
      window.open(`https://www.youtube.com/watch?v=${'testId'}`, '_blank');
    },
  },
];

export const mockGridContextMenu = {
  node: {
    data: {
      videoId: 'test2',
    },
  },
  column: {
    getColId: () => 'test',
  },
  defaultItems: mockApiContextMenuItems,
};

export const mockGridContextWithActionMenu = {
  node: {
    data: {
      videoId: 'testId',
    },
  },
  column: {
    getColId: () => 'title',
  },
  defaultItems: mockApiContextActionMenuItems,
};

export class GridServiceStub {
  selectionChanged = () => {};

  getRowData = () => {};

  getToggleCheckboxView = () => {};
}
