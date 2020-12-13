import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AccountStoreModule } from './account-store.module';
import * as AccountActions from './account.action';
import * as AccountSelectors from './account.selector';

@Injectable({
  providedIn: AccountStoreModule, // 'root' でもOK
})
export class TodoFacade {
  name$ = this.store.pipe(select(AccountSelectors.getName));

  constructor(private store: Store) {}

  saveName(name: string) {
    this.store.dispatch(AccountActions.saveName({ name }));
  }
}
