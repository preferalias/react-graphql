import React, { Component } from 'react';
import { signUp } from '../actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/loginForm'
import Wrapper from '../shared/main'

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      password: '',
    }
  }

  onSignUp = (e) => {
    e.preventDefault()
    this.props.signUp(this.state.username, this.state.password)
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() { 
    const {username, password} = this.state
    const { error, message, fetched } = this.props
    console.log(error + message + fetched)
    if (this.props.isAuthen)
      return(
        <Redirect to="/" />
      )
    
    return (
      <Wrapper>
        <h2>Register</h2>
        <hr/>
        <LoginForm
          Regis
          username={username}
          password={password} 
          onChange={this.onChange}
          toRegis={this.onSignUp}
        ></LoginForm>
        {
          fetched && error ? <div>Register fails</div> : null
        }
        {
          fetched && !error ? <div>Register Success</div> : null
        }
      </Wrapper>
    );
  }
}
 
const mapStateToProps = state => ({
  message: state.auth.message,
  error: state.auth.error,
  isAuthen: state.auth.isAuthenticated,
  fetched: state.auth.fetched
})

export default connect( mapStateToProps, { signUp })(SignUp)