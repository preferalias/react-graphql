import { FETCHED, FETCHING} from '../actions/types'

const initialState = {
  isFetched: false 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHED:
            return {
              ...state,
              isFetched : action.isFetched
            };
        case FETCHING:
            return {
              ...state,
              isFetched : action.isFetched
            }
        default: 
            return state
    }
}