import React , { Component} from 'react'
import './App.css';
import Menu from "./components/MenuComponent"
import {DISHES} from "./shared/dishes"
import DishDetail from './components/DishDetailComponent';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'

class App extends Component {

  constructor(props) {
    super(props)

    this.state ={
      dishes : DISHES,
      selectedDish : null,
    }
    
  }

  onDishSelect(dishId) {
    this.setState({
        selectedDish : dishId
    })
}

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish )[0]}/>
        <Footer />
      </div>
    );
  }
}

export default App;
