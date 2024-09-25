import { Injectable, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'

import { ToastrService } from 'ngx-toastr'
import { Observable } from 'rxjs'
import { RequestFailedDialogComponent } from '../components/request-failed-dialog/request-failed-dialog.component'

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly _toastr = inject(ToastrService)
  private readonly _dialog = inject(MatDialog)

  showInfo (message: string): void {
    this._toastr.info(message, 'Info')
  }

  showSuccess (message: string): void {
    this._toastr.success(message, 'Success')
    // this._snackBar.open(message, undefined, { panelClass: 'notify-success' })
  }

  showWarning (message: string): void {
    this._toastr.warning(message, 'Warning')
  }

  showError (message: string): void {
    this._toastr.error(message, 'Error')
  }

  notifyRequestFailed(): Observable<boolean> {
    return this._dialog.open(RequestFailedDialogComponent).afterClosed()
  }
}
