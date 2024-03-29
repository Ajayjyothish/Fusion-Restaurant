import React , { Component} from 'react'
import '../App.css';
import Menu from "./MenuComponent"

import DishDetail from './DishDetailComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import { Switch , Route , Redirect, withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import About from './AboutComponent'
import { postComment,fetchDishes, fetchComments, fetchPromos , fetchLeaders} from "../redux/ActionCreator"
import { actions } from "react-redux-form";
import { TransitionGroup , CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
  return ({
    dishes : state.dishes,
    comments : state.comments,
    promotions : state.promotions,
    leaders : state.leaders
  })
}

const mapDispatchToProps = (dispatch) => ({
  postComment : (dishId,rating,author,comments) => dispatch(postComment(dishId,rating,author,comments)),
  fetchDishes : () => {dispatch(fetchDishes())},
  resetFeedbackForm : () => {dispatch(actions.reset("feedback"))},
  fetchComments : () => {dispatch(fetchComments())},
  fetchPromos : () => {dispatch(fetchPromos())},
  fetchLeaders : () => {dispatch(fetchLeaders())}


})

class Main extends Component {

  

   componentDidMount(){
     this.props.fetchDishes()
     this.props.fetchComments()
     this.props.fetchPromos()
     this.props.fetchLeaders()
     
   }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter(dish => dish.featured )[0]}
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        leader={this.props.leaders.leaders.filter(leader => leader.featured )[0]}
        leadersLoading = {this.props.leaders.isLoading}
        leadersErrMess = {this.props.leaders.errMess}
        promotion={this.props.promotions.promotions.filter(promotion => promotion.featured )[0]}
        promosLoading = {this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess} />
        
      )
    }

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading = {this.props.dishes.isLoading}
          errMess = {this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId,10))}
          errMess = {this.props.dishes.errMess}
          commentsErrMess = {this.props.comments.errMess}
          postComment= {this.props.postComment}
        />
      )
    }

    return (
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} /> } />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Redirect to="/home" />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
