import { createAction } from 'redux-actions'

export const updateNewDress = createAction('Update new dress')
export const updateExistingDress = createAction('Update existing dress')
export const addToSelection = createAction('Add dress to selection')
export const removeFromSelection = createAction('remove dress to selection')
