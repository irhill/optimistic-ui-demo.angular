import { Injectable, inject } from '@angular/core'

import { ToastrService } from 'ngx-toastr'

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly _toastr = inject(ToastrService)

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
}
