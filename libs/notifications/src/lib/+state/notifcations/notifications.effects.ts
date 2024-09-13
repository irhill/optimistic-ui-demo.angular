import { inject, Injectable } from "@angular/core"
import { tap } from "rxjs"
import { Actions, createEffect, ofType } from "@ngrx/effects"

import * as actions from "./notifications.actions"
import { NotificationsService } from '../../services/NotificationsService'

@Injectable()
export class NotificationsEffects {
  private readonly _actions$ = inject(Actions)
  private readonly _notificationsService = inject(NotificationsService)

  private readonly showInfoNotification$ = createEffect(() => this._actions$.pipe(
    ofType(actions.ShowInfoNotification),
    tap(action => this._notificationsService.showInfo(action.message))
  ), { dispatch: false })

  private readonly showSuccessNotification$ = createEffect(() => this._actions$.pipe(
    ofType(actions.ShowSuccessNotification),
    tap(action => this._notificationsService.showSuccess(action.message))
  ), { dispatch: false })

  private readonly showWarningNotification$ = createEffect(() => this._actions$.pipe(
    ofType(actions.ShowWarningNotification),
    tap(action => this._notificationsService.showWarning(action.message))
  ), { dispatch: false })

  private readonly showErrorNotification$ = createEffect(() => this._actions$.pipe(
    ofType(actions.ShowErrorNotification),
    tap(action => this._notificationsService.showError(action.message))
  ), { dispatch: false })
}
