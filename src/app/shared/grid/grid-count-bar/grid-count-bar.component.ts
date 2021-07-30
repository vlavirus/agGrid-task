import { Component } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-grid-count-bar',
  templateUrl: './grid-count-bar.component.html',
  styleUrls: ['./grid-count-bar.component.scss'],
})
export class GridCountBarComponent {
  public params: IStatusPanelParams | undefined;

  public visible = true;

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  setVisible(visible: boolean): void {
    this.visible = visible;
  }

  isVisible(): boolean {
    return this.visible;
  }
}
