import React , { Component} from 'react'
import './App.css';
import Menu from "./components/MenuComponent"
import {DISHES} from "./shared/dishes"
import {COMMENTS} from './shared/comments'
import {LEADERS} from './shared/leaders'
import {PROMOTIONS} from './shared/promotions'
import DishDetail from './components/DishDetailComponent';
import Home from './components/HomeComponent'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { BrowserRouter} from 'react-router-dom'
import Contact from './components/ContactComponent'
import { Switch , Route , Redirect} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)

    this.state ={
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
      
    }
    
  }

  

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter(dish => dish.featured )[0]}
         leader={this.state.leaders.filter(leader => leader.featured )[0]}
         promotion={this.state.promotions.filter(promotion => promotion.featured )[0]}
         comment={this.state.comments.filter(comment => comment.featured )[0]}/>
      )
    }

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/contactus' component={Contact} />
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
