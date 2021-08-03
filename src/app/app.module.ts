import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';
// import { AgGridModule } from 'ag-grid-enterprise';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
// import { AllModules } from '@ag-grid-enterprise/all-modules';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './shared/grid/grid.component';
import { GridImgComponent } from './shared/grid/grid-img/grid-img.component';
import { GridCountBarComponent } from './shared/grid/grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './shared/grid/grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './shared/grid/grid-header-checkbox/grid-header-checkbox.component';
import { environment } from '../environments/environment';
import { CoreModule } from './store/core.module';
import {YoutubeDataPipe} from './shared/pipes/youtube-data.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridImgComponent,
    GridCountBarComponent,
    GridToggleButtonComponent,
    GridHeaderCheckboxComponent,
    YoutubeDataPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    FormsModule,
    CoreModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
