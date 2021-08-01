import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { coreReducer } from './core.reducer';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('core', coreReducer)],
})
export class CoreModule {}
