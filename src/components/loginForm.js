import React from 'react';
import Form from '../App/Login'

export default ({username, password, onChange, onSignin})=> {

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
          <button onClick={onSignin}>Login</button> 
        </Form>  
      </div>
  )
}