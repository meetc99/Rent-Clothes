import { handleActions } from 'redux-actions'
import { updateNewTokens, updateExistingTokens } from '../actions/subscribedPlan'

const defaultState = {
  newTokens: 1400,
  existingTokens: 700,
  subscriptionExpiry: '03-04-2019',
  planCode: 'ROTD'
}

const subscribedPlanReducer = handleActions({
  [updateNewTokens]: (state, { payload: { newTokens } }) => ({
    ...state,
    newTokens
  }),
  [updateExistingTokens]: (state, { payload: { existingTokens } }) => ({
    ...state,
    existingTokens
  })
},
defaultState
)

export default subscribedPlanReducer
