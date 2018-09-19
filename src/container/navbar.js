
import React, { Component } from 'react';
import { Container } from '../shared/global'
//import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions/authActions'
import {Nav} from '../App/Navbar'
import Link from '../components/navLink'

class Navbar extends Component {
  state = {
    
  }
  componentDidMount(){
    this.props.isAuthen ? this.setState({redirect: false}) : this.setState({redirect: true})
  }

  render() { 
    const isLoggedIn = localStorage.getItem("token") ? true : false
    
    return(
      <Nav>
        <Container>
          <ul>
            <li><Link path="/" name="HOME" show={true} /></li>
            <li><Link path="/product" name="PRODUCT" show={isLoggedIn} /></li>
            <li><Link path="/news" name="NEWS" show={isLoggedIn} /></li>
            <li><Link path="/contact" name="CONTACT" show={isLoggedIn} /></li>
            {isLoggedIn
              ? <li><a href="/" onClick={this.props.logOut}>LOGOUT</a></li>
              : <li><Link path="/login" name="LOGIN" show={true}/></li>
            }
          </ul>
        </Container>
      </Nav>
    )
  }
}

const mapStateToProps = state => ({
  message: state.auth.message,
  error: state.auth.error,
  isAuthen: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logOut })(Navbar)