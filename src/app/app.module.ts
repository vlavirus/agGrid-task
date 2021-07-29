import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
// import { AgGridModule } from 'ag-grid-enterprise';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './shared/grid/grid.component';
import { GridImgComponent } from './shared/grid/grid-img/grid-img.component';
import { GridCheckboxComponent } from './shared/grid/grid-checkbox/grid-checkbox.component';
import { GridStatusBarComponent } from './shared/grid/grid-status-bar/grid-status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridImgComponent,
    GridCheckboxComponent,
    GridStatusBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // AllModules,
    AgGridModule.withComponents([GridStatusBarComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
