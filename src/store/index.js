import { createStore, combineReducers } from 'redux'
import subscribedPlanReducer from "../reducers/subscribedPlan";
import presentClothesReducer from "../reducers/presentClothes";

const store = createStore(combineReducers({
    subscribedPlan: subscribedPlanReducer,
    presentClothes: presentClothesReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
