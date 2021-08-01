import { Component, ElementRef, ViewChild } from '@angular/core';
import { IHeaderParams } from '@ag-grid-community/core';
@Component({
  selector: 'app-grid-header-checkbox',
  templateUrl: './grid-header-checkbox.component.html',
  styleUrls: ['./grid-header-checkbox.component.scss'],
})
export class GridHeaderCheckboxComponent {
  private params: any;

  @ViewChild('menuButton', { read: ElementRef }) public menuButton: any;

  agInit(params: IHeaderParams): void {
    this.params = params;
  }

  fieldsChange(values: any): void {
    values.currentTarget.checked ? this.params.api.selectAll() : this.params.api.deselectAll();
    debugger
  }
}
