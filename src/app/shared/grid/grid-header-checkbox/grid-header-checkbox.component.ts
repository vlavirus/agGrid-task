import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IHeaderParams } from '@ag-grid-community/core';
@Component({
  selector: 'app-grid-header-checkbox',
  templateUrl: './grid-header-checkbox.component.html',
  styleUrls: ['./grid-header-checkbox.component.scss'],
})
export class GridHeaderCheckboxComponent {
  private params: any;

  @ViewChild('menuButton', { read: ElementRef }) public menuButton: any;

  constructor() {}

  agInit(params: IHeaderParams): void {
    this.params = params;
  }

  onMenuClicked(): void {
    this.params.showColumnMenu(this.menuButton.nativeElement);
  }
}
