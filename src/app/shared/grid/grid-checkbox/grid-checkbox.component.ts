import { Component } from '@angular/core';

import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-grid-checkbox',
  templateUrl: './grid-checkbox.component.html',
  styleUrls: ['./grid-checkbox.component.scss'],
})
export class GridCheckboxComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event: any): void {
    const { checked } = event.target;
    const { colId } = this.params.column;
    this.params.node.setDataValue(colId, checked);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
