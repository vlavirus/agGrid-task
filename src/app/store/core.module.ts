import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { coreReducer } from './core.reducer';
import { CoreEffect } from './core.effect';

@NgModule({
  declarations: [],
  imports: [StoreModule.forFeature('core', coreReducer), EffectsModule.forFeature([CoreEffect])],
  exports: [],
})
export class CoreModule {}
