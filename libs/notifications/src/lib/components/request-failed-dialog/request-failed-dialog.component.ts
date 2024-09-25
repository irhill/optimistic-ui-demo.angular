import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButton } from '@angular/material/button'
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog'

@Component({
  selector: 'oui-request-failed-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
  templateUrl: './request-failed-dialog.component.html',
  styleUrl: './request-failed-dialog.component.css',
})
export class RequestFailedDialogComponent {
  private readonly _dialogRef = inject(MatDialogRef<RequestFailedDialogComponent>)

  onRetry() {
    this._dialogRef.close(true)
  }

  onCancel() {
    this._dialogRef.close(false)
  }
}
