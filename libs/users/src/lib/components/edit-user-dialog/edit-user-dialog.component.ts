import { Component, inject } from '@angular/core'

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { MatFormField, MatLabel } from '@angular/material/form-field'
import { MatInput } from '@angular/material/input'
import { MatButton } from '@angular/material/button'

import { User } from '../../models/user'

@Component({
  selector: 'oui-edit-user-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatInput,
    MatFormField,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {
  private readonly _dialogRef = inject(MatDialogRef<EditUserDialogComponent>)
  private readonly data = inject<User>(MAT_DIALOG_DATA)

  forename: string = this.data?.forename
  surname: string = this.data?.surname
  dob: string = this.data?.dob

  onSubmit (): void {
    const userData = {
      ...this.data,
      forename: this.forename,
      surname: this.surname,
      dob: this.dob
    }

    this._dialogRef.close(userData)
  }

  onCancel (): void {
    this._dialogRef.close()
  }
}
