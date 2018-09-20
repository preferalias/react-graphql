import { SIGN_IN, SIGN_OUT, CHECK_AUTHENTICATION, SIGN_UP } from './types'
import { fetching, fetched } from './fetchActions'
import { SERVER_URL } from '../utils/config'

export const getAuthen = (user,pass) => dispatch => {
  fetch(`${SERVER_URL}/signin`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      username: user,
      password: pass 
    })
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if(data.isAuthenticated){
        localStorage.setItem('token', data.token)
      }
      dispatch({
        type: SIGN_IN,
        payload : data.message,
        error : data.error,
        isAuthenticated: data.isAuthenticated,
        token: data.token,
    })    }
  ).catch(err => {
      dispatch({
        type: SIGN_IN,
        payload: 'Network error: Please check your connection',
        error : true,
        isAuthenticated: false
      })
    }
    )
};

export const checkAuthen = () => dispatch => {
  fetch(`${SERVER_URL}/checkAuthentication`,{
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      dispatch({
        type: CHECK_AUTHENTICATION,
        payload : data.message,
        error : data.error,
        isAuthenticated: data.isAuthenticated,
        fetched: true
    })   
  }
  ).catch(err => {
      dispatch({
        type: CHECK_AUTHENTICATION,
        payload: 'Network error: Please check your connection',
        error : true,
        isAuthenticated: false,
        fetched: true
      })
    }
    )
}

export const signUp = (user, pass) => dispatch => {
  fetch(`${SERVER_URL}/signup`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      username: user,
      password: pass 
    })
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if(data.isAuthenticated){
        localStorage.setItem('token', data.token)
      }
      dispatch({
        type: SIGN_UP,
        payload : data.message,
        error : data.error,
        fetched: true,
    })    }
  ).catch(err => {
      dispatch({
        type: SIGN_UP,
        payload: 'Network error: Please check your connection',
        error : true,
        fetched: true
      })
    }
  ) 
}

export const logOut = () => dispatch => {
  localStorage.clear()
  dispatch({
    type: SIGN_OUT,
    payload: 'Logged out',
    error: false,
    isAuthenticated: false
  })
}