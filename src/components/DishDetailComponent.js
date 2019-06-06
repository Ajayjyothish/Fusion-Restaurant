import React, { Component } from 'react'
import { Media, Card, CardImg ,CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap'


class DishDetail extends Component {
    constructor(props) {
        super(props)
        
    }

    renderComments(dish){
        if(dish != null){

            const comm = dish.comments.map(comment => {
            return(
                <div key={comment.id}>
                    <li>--{comment.comment}</li><br />
                    <li>{comment.author} , {new Intl.DateTimeFormat('en-US',{year : 'numeric' , month : "short", day : '2-digit' }).format(new Date(Date.parse(comment.date)))} <br /><br /></li>
                </div>
            )
        })
        return comm
    }else{
        return (
            <div></div>
        )
    }
        
    }

    render(){
        const dish = this.props.dish
        

        if (dish != null){
        return(
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {this.renderComments(dish)}
                    </ul>
                </div>
            </div>
        )
        }else{
            return(
                <div></div>
            )
        }
    }
}

export default DishDetail