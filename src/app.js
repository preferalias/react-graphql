import React, { Component } from 'react'
import Header from './components/header'
import Navbar from './container/navbar'
import Showcase from './components/showcase'
import Footer from './components/footer'
import { Container } from './shared/global'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home'
import Product from './container/product'
import News from './components/news'
import Contact from './components/contact'
import Login from './container/login'
import requireAuth from './utils/requireAuth'

class App extends Component {
  render() { 
    return ( 
      <Router>
        <div>
          <Header></Header>
          <Navbar></Navbar>
          <Showcase></Showcase>
          <Container>
            <Route exact path="/" component={Home}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/product" component={requireAuth(Product)} />
          </Container>
          <Footer></Footer>
        </div>
      </Router>
     );
  }
}
 
export default App;