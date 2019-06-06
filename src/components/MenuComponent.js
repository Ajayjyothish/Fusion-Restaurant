import React, { Component } from 'react'
import { directive } from '@babel/types';
import { Media, Card, CardImg ,CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent'

class Menu extends Component{
    constructor(props) {
        super(props)    
        
        this.state = {
            selectedDish : null
        }
        this.onDishSelect = this.onDishSelect.bind(this)
        
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish : dish
        })
    }

   


    render(){
        const menu = this.props.dishes.map(item => {
            return ( 
                <div key={item.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onDishSelect(item)}>
                        
                        <CardImg width='100%' src={item.image} alt={item.name}></CardImg>
                    
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                            {/* <p>{item.description}</p> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (  
            <div className="container">
                <div className='row'>
                    
                        {menu}
                    
                </div>
                
                <DishDetail dish={this.state.selectedDish}/>
                
            </div>
         );
    }
}

export default Menu 