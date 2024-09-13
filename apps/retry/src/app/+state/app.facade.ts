import { inject, Injectable } from '@angular/core'
import { select, Store } from '@ngrx/store'

import { State } from './app.reducer'
import { selectLoading, selectUsers } from './app.selector'
import { AppActions } from './app.actions'

@Injectable()
export class AppFacade {
  private readonly _store = inject<Store<State>>(Store)

  loading$ = this._store.pipe(select(selectLoading))
  users$ = this._store.pipe(select(selectUsers))

  dispatch(action: AppActions) {
    this._store.dispatch(action)
  }
}
