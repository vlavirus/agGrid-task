import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './shared/grid/grid.component';
import { GridImgComponent } from './shared/grid/grid-img/grid-img.component';
import { GridCountBarComponent } from './shared/grid/grid-count-bar/grid-count-bar.component';
import { GridToggleButtonComponent } from './shared/grid/grid-toggle-button/grid-toggle-button.component';
import { GridHeaderCheckboxComponent } from './shared/grid/grid-header-checkbox/grid-header-checkbox.component';
import { environment } from '../environments/environment';
import { CoreModule } from './store/core.module';
import { YoutubeApiService } from './shared/services/youtube-api.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridImgComponent,
    GridCountBarComponent,
    GridToggleButtonComponent,
    GridHeaderCheckboxComponent,
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
    EffectsModule.forRoot([]),
  ],
  providers: [YoutubeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
