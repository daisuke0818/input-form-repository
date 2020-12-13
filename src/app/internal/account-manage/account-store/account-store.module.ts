import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './account.reducer';
import { featureName } from './account.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([])
  ]
})
export class AccountStoreModule {}
