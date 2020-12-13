import { createAction, props } from '@ngrx/store';

export const saveName = createAction(
  '[Account Page] Save Name',
  props<{ name: string }>()
);
