import { Component } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
@Component({
  selector: 'app-count-bar',
  templateUrl: './count-bar.component.html',
  styleUrls: ['./count-bar.component.scss'],
})
export class CountBarComponent {
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
