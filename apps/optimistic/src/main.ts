import { bootstrapApplication } from '@angular/platform-browser'

import { getConfiguration } from '@libs/configuration'
import { appFeatureKey, appReducer } from './app/+state/app.reducer'
import { AppEffects } from './app/+state/app.effects'

import { AppComponent } from './app/components/app.component'

const appConfig = getConfiguration(appFeatureKey, appReducer, AppEffects)

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
)
