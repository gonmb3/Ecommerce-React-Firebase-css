import { combineReducers } from "redux";
import { cartReducer } from './cartReducer';

const combReducer = combineReducers({
     cartReducer : cartReducer,
})

export default combReducer