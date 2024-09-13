import { Component, inject, OnInit } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import { CoreLayoutComponent } from '@libs/core'
import { User, UsersTableComponent } from '@libs/users'

import { AppFacade } from '../+state/app.facade'
import * as actions from '../+state/app.actions'

@Component({
  standalone: true,
  imports: [AsyncPipe, CoreLayoutComponent, UsersTableComponent],
  providers: [AppFacade],
  selector: 'oui-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  readonly appFacade = inject(AppFacade)

  ngOnInit(): void {
    this.appFacade.dispatch(actions.LoadUsers())
  }

  addUser(user: User): void {
    this.appFacade.dispatch(actions.AddUser({ user }))
  }

  editUser(user: User): void {
    const { id = '' } = user
    this.appFacade.dispatch(actions.EditUser({ id, user }))
  }

  deleteUser(id: string): void {
    this.appFacade.dispatch(actions.DeleteUser({ id }))
  }
}
