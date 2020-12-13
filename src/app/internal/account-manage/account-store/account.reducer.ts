import { Action, createReducer, on } from '@ngrx/store';
import * as AccountActions from './account.action';

export const featureName = 'account';

export interface State {
  name: string;
}

export const initialState: State = {
  name: '',
};

// 状態の取得

export const reducer = createReducer(
  initialState,
  on(AccountActions.saveName, (state) => {
    return { ...state, name };
  })
);
