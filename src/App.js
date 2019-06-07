import React , { Component} from 'react'
import './App.css';
import Menu from "./components/MenuComponent"
import {DISHES} from "./shared/dishes"
import DishDetail from './components/DishDetailComponent';
import Home from './components/HomeComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { BrowserRouter} from 'react-router-dom'
import { Switch , Route , Redirect} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)

    this.state ={
      dishes : DISHES,
      
    }
    
  }

  

  render() {

    const HomePage = () => {
      return (
        <Home />
      )
    }

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} /> } />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
