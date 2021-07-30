import { Component, OnInit } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-community/all-modules';
@Component({
  selector: 'app-grid-toggle-button',
  templateUrl: './grid-toggle-button.component.html',
  styleUrls: ['./grid-toggle-button.component.scss'],
})
export class GridToggleButtonComponent {
  private params: IStatusPanelParams | undefined;

  agInit(params: IStatusPanelParams): void {
    this.params = params;
  }

  onClick(): void {
    alert(`Selected Row Count: ${this.params?.api.getSelectedRows().length}`);
  }
}
