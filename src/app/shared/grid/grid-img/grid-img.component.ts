import { Component } from '@angular/core';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-grid-img',
  templateUrl: './grid-img.component.html',
  styleUrls: ['./grid-img.component.scss'],
})
export class GridImgComponent implements ICellRendererAngularComp {
  params: ICellRendererParams | undefined;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
