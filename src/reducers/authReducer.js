import { SIGN_IN, SIGN_OUT, CHECK_AUTHENTICATION, SIGN_UP} from '../actions/types'

const initialState = {
    error: false,
    message: {},
    isAuthenticated: false,
    token: '',
    fetched: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
                message : action.payload,
                error : action.error,
                isAuthenticated: action.isAuthenticated ,
                token: action.token,
            };
        case SIGN_UP: 
            return {
                ...state,
                message : action.payload,
                error : action.error,
                fetched: action.fetched
            }
        case SIGN_OUT:
            return {
              ...state,
              message : action.payload,
              error : action.error,
              isAuthenticated: false,
            }
        case CHECK_AUTHENTICATION:
            return {
                ...state,
                message: action.payload,
                error : action.error,
                isAuthenticated: action.isAuthenticated,
                fetched: action.fetched
            }
        default: 
            return state
    }
}