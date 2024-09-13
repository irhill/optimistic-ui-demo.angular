import { createReducer, on } from '@ngrx/store'

import { User } from '@libs/users'

import * as actions from './app.actions'

export const appFeatureKey = 'app-container-feature-key'

export interface State {
  loading: boolean
  loaded: boolean
  users: User[]
  error: Error | null
}

export const initialState: State = {
  loading: false,
  loaded: false,
  users: [],
  error: null
}

export const appReducer = createReducer(
  initialState,
  on(actions.LoadUsers, state => ({ ...state, loading: !state.loaded })),
  on(actions.LoadUsersSuccess, (state, { users }) => ({ ...state, loading: false, loaded: true, users })),
  on(actions.LoadUsersError, (state, { error }) => ({ ...state, loading: false, loaded: true, error })),

  on(actions.AddUser, (state, { user }) => ({
    ...state,
    users: [ ...state.users || [], user ]
  })),
  on(actions.AddUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(u => !u.id ? user : u)
  })),
  on(actions.AddUserError, (state, { error }) => ({
    ...state,
    users: state.users.filter(u => u.id),
    error
  })),
)
