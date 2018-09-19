import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { Provider } from 'react-redux'
import store from './store'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "http://ec2-18-220-224-29.us-east-2.compute.amazonaws.com:5001/graphql",
})
ReactDOM.render(
  <ApolloProvider client = {client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
     , document.getElementById('root')
  )
