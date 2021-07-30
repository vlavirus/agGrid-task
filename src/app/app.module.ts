import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
// import { AgGridModule } from 'ag-grid-enterprise';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './shared/grid/grid.component';
import { GridImgComponent } from './shared/grid/grid-img/grid-img.component';
import { GridCheckboxComponent } from './shared/grid/grid-checkbox/grid-checkbox.component';
import { GridStatusBarComponent } from './shared/grid/grid-status-bar/grid-status-bar.component';
import { CountBarComponent } from './shared/grid/count-bar/count-bar.component';
import { GridCountBarComponent } from './shared/grid/grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './shared/grid/grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './shared/grid/grid-header-checkbox/grid-header-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridImgComponent,
    GridCheckboxComponent,
    CountBarComponent,
    GridCountBarComponent,
    GridToggleButtonComponent,
    GridHeaderCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    AgGridModule.withComponents([GridCheckboxComponent]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
