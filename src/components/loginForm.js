import React from 'react';
import Form from '../App/Login'

export default ({username, password, onChange, onSignin, toRegis, Regis})=> {

  return (
    <div>
        <Form> 
         <input 
            onChange={onChange} 
            value={username}
            name="username"
            type="text" 
            placeholder="username" />
          <input 
            onChange={onChange} 
            value={password}
            name="password"
            type="password" 
            placeholder="password" />
          
          {
            Regis ? null
            : <button onClick={onSignin}>Login</button>
          }
          <button onClick={toRegis}>Register</button>
        </Form>  
      </div>
  )
}