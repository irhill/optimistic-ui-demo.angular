import { createAction, props, union } from '@ngrx/store'

import { User } from '@libs/users'

export const LoadUsers = createAction('[Users] Load Users')
export const LoadUsersSuccess = createAction('[Users] Load Users Success', props<{ users: User[] }>())
export const LoadUsersError = createAction('[Users] Load Users Error', props<{ error: Error }>())

export const AddUser = createAction('[Users] Add User', props<{ user: User }>())
export const AddUserSuccess = createAction('[Users] Add User Success')
export const AddUserError = createAction('[Users] Add User Error', props<{ error: Error }>())

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
  AddUserError,
  EditUser,
  EditUserSuccess,
  EditUserError,
  DeleteUser,
  DeleteUserSuccess,
  DeleteUserError,
})

export type AppActions = typeof actions
