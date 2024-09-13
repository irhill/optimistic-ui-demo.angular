import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'

import { User, UsersService } from '@libs/users'
import { ShowErrorNotification, ShowInfoNotification, ShowSuccessNotification } from '@libs/notifications'

import * as actions from './app.actions'

@Injectable()
export class AppEffects {
  private readonly _actions$ = inject(Actions)
  private readonly _usersService = inject(UsersService)

  private readonly loadUser$ = createEffect(() => this._actions$.pipe(
    ofType(actions.LoadUsers),
    mergeMap(() =>
      this._usersService.getUsers().pipe(
        map((users: User[]) => actions.LoadUsersSuccess({ users })),
        catchError((error: Error) => of(actions.LoadUsersError({ error })))
      )
    )
  ))

  private readonly addUSer$ = createEffect(() => this._actions$.pipe(
    ofType(actions.AddUser),
    mergeMap(({ user }) =>
      this._usersService.addUser(user).pipe(
        map(_ => actions.AddUserSuccess({ user })),
        catchError((error: Error) => of(actions.AddUserError({ error })))
      )
    )
  ))

  private readonly updateUser$ = createEffect(() => this._actions$.pipe(
    ofType(actions.EditUser),
    mergeMap(({ id, user }) =>
      this._usersService.updateUser(id, user).pipe(
        map(_ => actions.EditUserSuccess()),
        catchError((error: Error) => of(actions.EditUserError({ error })))
      )
    )
  ))

  private readonly deleteUser$ = createEffect(() => this._actions$.pipe(
    ofType(actions.DeleteUser),
    mergeMap(({ id }) =>
      this._usersService.deleteUser(id).pipe(
        map(_ => actions.DeleteUserSuccess()),
        catchError((error: Error) => of(actions.DeleteUserError({ error })))
      )
    )
  ))

  private readonly refreshUser$ = createEffect(() => this._actions$.pipe(
    ofType(actions.AddUserSuccess, actions.EditUserSuccess, actions.DeleteUserSuccess),
    map(_ => actions.LoadUsers())
  ))

  private readonly notifyInfo = createEffect(() => this._actions$.pipe(
    ofType(actions.LoadUsers, actions.AddUser, actions.EditUser, actions.DeleteUser),
    map(action => ShowInfoNotification({ message: `Info: ${ action.type }` }))
  ))

  private readonly notifySuccess$ = createEffect(() => this._actions$.pipe(
    ofType(actions.LoadUsersSuccess, actions.AddUserSuccess, actions.EditUserSuccess, actions.DeleteUserSuccess),
    map(action => ShowSuccessNotification({ message: `Success: ${ action.type }` }))
  ))

  private readonly notifyError = createEffect(() => this._actions$.pipe(
    ofType(actions.LoadUsersError, actions.AddUserError, actions.EditUserError, actions.DeleteUserError),
    map(action => ShowErrorNotification({ message: `Error: ${ action.type }` }))
  ))
}
