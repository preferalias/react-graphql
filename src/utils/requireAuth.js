import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { checkAuthen } from '../actions/authActions'
import { Redirect } from 'react-router-dom'
export default (ComposedComponent) => {
  class Authenticate extends React.Component{
    componentWillMount(){
      this.props.checkAuthen()
      console.log('fetched ' + this.props.fetched)
    }

    render(){
      
      if(this.props.fetched && this.props.isAuthenticated){
        return (
          <ComposedComponent {...this.props} />
        )
      } else if (this.props.fetched && !this.props.isAuthenticated) {
        return (
          <Redirect to="/login"></Redirect>
        )
      } else {
        return null
      }
     
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired 
  }
  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      fetched: state.auth.fetched
    }
  }

  return connect(mapStateToProps, {checkAuthen} )(Authenticate)
}