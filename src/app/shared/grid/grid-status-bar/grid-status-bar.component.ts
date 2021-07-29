import { Component } from '@angular/core';
import { IStatusPanelParams } from '@ag-grid-community/core';

@Component({
  selector: 'app-grid-status-bar',
  templateUrl: './grid-status-bar.component.html',
  styleUrls: ['./grid-status-bar.component.scss'],
})
export class GridStatusBarComponent {
  public params: IStatusPanelParams | undefined;

  onClick(): void {
    alert(`Selected Row Count: ${this.params?.api.getSelectedRows().length}`);
  }
}
