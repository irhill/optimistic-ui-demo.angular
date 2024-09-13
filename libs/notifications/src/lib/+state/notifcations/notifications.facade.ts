import {inject, Injectable} from "@angular/core"
import {Store} from "@ngrx/store"

import {NotificationsActions} from "./notifications.actions"

Injectable()
export class NotificationsFacade {
  private readonly _store = inject(Store)

  dispatch(action: NotificationsActions) {
    this._store.dispatch(action)
  }
}
