import { createAction, props, union } from '@ngrx/store'

import { User } from '@libs/users'

export const LoadUsers = createAction('[Users] Load Users')
export const LoadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>())
export const LoadUsersError = createAction('[Users] Load Users Error', props<{ error: Error }>())

export const AddUser = createAction(
  '[Users] Add User',
  (payload: { user: User, isRetry? : boolean }) => ({ user: payload.user, isRetry: payload.isRetry ?? false}))
export const AddUserSuccess = createAction('[Users] Add User Success', props<{ user: User }>())
export const AddUserError = createAction('[Users] Add User Error', props<{ error: Error, user: User }>())
export const AddUserFail = createAction('[Users] Add User Fail', props<{ error: Error }>())

export const EditUser = createAction('[Users] Edit User', props<{ id: string, user: User }>())
export const EditUserSuccess = createAction('[Users] Edit User Success')
export const EditUserError = createAction('[Users] Edit User Error', props<{ error: Error }>())

export const DeleteUser = createAction('[Users] Delete User', props<{ id: string }>())
export const DeleteUserSuccess = createAction('[Users] Delete User Success')
export const DeleteUserError = createAction('[Users] Delete User Error', props<{ error: Error }>())

const actions = union({
  LoadUsers,
  LoadUsersSuccess,
  LoadUsersError,
  AddUser,
  AddUserSuccess,
  AddUserFail,
  AddUserError,
  EditUser,
  EditUserSuccess,
  EditUserError,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserError,
})

export type AppActions = typeof actions
