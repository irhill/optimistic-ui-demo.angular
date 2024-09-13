import { createReducer, on } from '@ngrx/store'

import { User } from '@libs/users'

import * as actions from './app.actions'

export const appFeatureKey = 'app-container-feature-key'

export interface State {
  loading: boolean
  users: User[]
  error: Error | null
}

export const initialState: State = {
  loading: false,
  users: [],
  error: null
}

export const appReducer = createReducer(
  initialState,
  on(actions.LoadUsers, actions.AddUser, actions.EditUser, actions.DeleteUser, state => ({ ...state, loading: true })),
  on(actions.LoadUsersSuccess, (state, { users }) => ({ ...state, loading: false, users })),
  on(actions.AddUserSuccess, actions.EditUserSuccess, actions.DeleteUserSuccess, (state) => ({ ...state, loading: false })),
  on(actions.LoadUsersError, actions.AddUserError, actions.EditUserError, actions.DeleteUserError, (state, { error }) => ({ ...state, loading: false, error }))
)
