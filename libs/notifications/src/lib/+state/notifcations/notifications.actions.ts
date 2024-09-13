import {createAction, props, union} from "@ngrx/store"

export const ShowInfoNotification = createAction('[Notification] Show Info Notification', props<{ message: string }>())
export const ShowSuccessNotification = createAction('[Notification] Show Success Notification', props<{ message: string }>())
export const ShowWarningNotification = createAction('[Notification] Show Warning Notification', props<{ message: string }>())
export const ShowErrorNotification = createAction('[Notification] Show Error Notification', props<{ message: string }>())

const actions = union({
  ShowInfoNotification,
  ShowSuccessNotification,
  ShowWarningNotification,
  ShowErrorNotification,
})

export type NotificationsActions = typeof actions
