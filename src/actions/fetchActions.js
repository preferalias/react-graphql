import { FETCHING, FETCHED} from './types'

export const fetching = dispatch => {
  dispatch({
    type: FETCHING,
    isFetched: false
  })
}

export const fetched =  dispatch => {
  dispatch({
    type: FETCHED,
    isFetched: true 
  })
}
