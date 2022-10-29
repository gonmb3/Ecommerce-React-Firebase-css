
import { createStore } from 'redux';
import combReducer from './combineReducer';
import { cartReducer } from './cartReducer';

/*LOCALSTORAGE*/ 
const initialStore = {
    cartReducer : {
        cartItems : JSON.parse(localStorage.getItem("cartItems")) ??  []
    }
}

const store = createStore(combReducer, initialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store
