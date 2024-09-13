import { createFeatureSelector, createSelector } from '@ngrx/store'

import { State, appFeatureKey } from './app.reducer'

export const selectUsersState = createFeatureSelector<State>(appFeatureKey)

export const selectLoading = createSelector(selectUsersState, state => state.loading)
export const selectUsers = createSelector(selectUsersState, state => state.users)
