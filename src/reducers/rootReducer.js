import { combineReducers } from 'redux'
import productReducer from './productReducer'
import authReducer from './authReducer'
import fetchReducer from './fetchReducer'

export default combineReducers({
    products: productReducer,
    auth: authReducer,
    fetch: fetchReducer 
});