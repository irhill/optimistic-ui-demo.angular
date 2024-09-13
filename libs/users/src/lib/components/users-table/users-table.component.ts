import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { AsyncPipe } from '@angular/common'

import {MatButton, MatIconButton} from "@angular/material/button"
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card'
import { MatDialog } from '@angular/material/dialog'
import {MatIcon} from "@angular/material/icon"
import { MatProgressSpinner } from '@angular/material/progress-spinner'
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table'

import { User } from '../../models/user'
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component'
import { NotificationsFacade, ShowErrorNotification } from '@libs/notifications'

@Component({
  selector: 'oui-users-table',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatIcon,
    MatButton,
    MatIconButton,
    AsyncPipe,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatProgressSpinner,
    MatCardActions,
  ],
  providers: [ NotificationsFacade ],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss',
})
export class UsersTableComponent {
  private readonly _dialog = inject(MatDialog)
  private readonly _notificationsFacade = inject(NotificationsFacade)

  @Input({ required: true }) users: User[] | null = []
  @Input() loading: boolean | null = false
  @Input() showEmbellishedData = false
  @Input() additionalDisplayColumns: string[] = []

  @Output() addUser = new EventEmitter<User>()
  @Output() editUser = new EventEmitter<User>()
  @Output() deleteUser = new EventEmitter<string>()

  displayedColumns: string[] = [ 'forename', 'surname', 'dob', 'actions', ...this.additionalDisplayColumns ]

  handleAddUser(): void {
    this._dialog
      .open(EditUserDialogComponent)
      .afterClosed()
      .subscribe((user: User | undefined) => {
        if (user) this.addUser.emit(user)
      })
  }

  handleEditUser(user: User): void {
    this._dialog
      .open(EditUserDialogComponent, { data: user })
      .afterClosed()
      .subscribe((user: User) => {
        if (user.id) this.editUser.emit(user)
        else this._notificationsFacade
          .dispatch(ShowErrorNotification({ message: 'Edit failed: no user id' }))
    })
  }

  handleDeleteUser(id: string): void {
    if (id) this.deleteUser.emit(id)
    else this._notificationsFacade
      .dispatch(ShowErrorNotification({ message: 'Delete failed: no user id' }))
  }
}
