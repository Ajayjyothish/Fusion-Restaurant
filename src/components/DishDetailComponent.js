import React  from 'react'
import { Breadcrumb, BreadcrumbItem, Media, Card, CardImg ,CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap'
import { Link } from "react-router-dom";


   

    function RenderComments({comments}){
        if(comments != null){

            const comm = comments.map(comment => {
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

    const RenderMenu = ({dish}) => {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        )        
    }

    const DishDetail = ({dish,comments}) => {
        
        

        if (dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-md-5 m-1'>
                        <RenderMenu dish={dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <RenderComments comments={comments} />
                        </ul>
                    </div>
                </div>
            </div>
        )
        }else{
            return(
                <div></div>
            )
        }
    }
    


export default DishDetail