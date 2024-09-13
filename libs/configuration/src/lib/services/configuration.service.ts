import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient } from '@angular/common/http'

import { provideStore } from '@ngrx/store'
import { provideEffects } from '@ngrx/effects'

import { NotificationsEffects } from '@libs/notifications'
import { provideToastr } from 'ngx-toastr'

export const getConfiguration = (appFeatureKey: string, appReducer: any, appEffects: any): ApplicationConfig => {
  return {
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideAnimationsAsync(),
      provideHttpClient(),
      provideStore({ [appFeatureKey]: appReducer }),
      provideEffects(appEffects, NotificationsEffects),
      provideToastr({ positionClass: 'toast-bottom-right' })
    ],
  }
}
