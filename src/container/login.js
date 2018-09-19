import React, { Component } from 'react';
import { getAuthen } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/loginForm'
import Wrapper from '../shared/main'

class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: '',
    }
  }

  onSignin = (e) => {
    e.preventDefault()
    this.props.getAuthen(this.state.username, this.state.password)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 
    const {username, password} = this.state
    console.log(this.props.token)
    if (this.props.isAuthen)
      return(
        <Redirect to="/" />
      )

    return (
      <Wrapper>
        <h2>Login</h2>
        <hr/>
        <LoginForm
          username={username}
          password={password} 
          onChange={this.onChange}
          onSignin={this.onSignin}
        ></LoginForm>
      </Wrapper>
    );
  }
}
 
const mapStateToProps = state => ({
  message: state.auth.message,
  error: state.auth.error,
  isAuthen: state.auth.isAuthenticated,
  token: state.auth.token
})

export default connect( mapStateToProps, { getAuthen })(Login)