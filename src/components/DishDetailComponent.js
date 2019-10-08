import React, { Component }  from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardImg , CardText,CardBody,CardTitle } from 'reactstrap'
import {Label, Button,Modal,ModalHeader,ModalBody} from 'reactstrap'
import { Link } from "react-router-dom";
import { Control,LocalForm,Errors } from "react-redux-form";
import {Col,Row } from 'reactstrap';
import { Loading } from "./loadingComponet";
import { baseURL } from "../shared/baseURL";


   

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
        )}
        
    }

const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)



    const RenderMenu = ({dish}) => {
        return(
            <Card>
                <CardImg width="100%" src={baseURL + dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
            </Card>
        )        
    }


    class DishDetail extends Component {

        constructor(props) {
            super(props)

            this.state ={
                isModalOpen : false 
            }

            this.toggleModal = this.toggleModal.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }

        handleSubmit(values){
            this.toggleModal()
            this.props.postComment(this.props.dish.id,values.rating,values.Name, values.message)
    
        }
        
        render(){

            if(this.props.isLoading){
                return(
                    <div className='container'>
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                )
            }
            else if ( this.props.errMess){
                return(
                    <div className='container'>
                        <div className="row">
                            <h4>{this.props.errMess}</h4>
                        </div>
                    </div>
                )
            }

            else if (this.props.dish != null){
                return(
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 col-md-5 m-1'>
                                <RenderMenu dish={this.props.dish} />
                            </div>
                            <div className="col-12 col-md-5 m-1">
                                <h4>Comments</h4>
                                <ul className="list-unstyled">
                                    <RenderComments comments={this.props.comments} 
                                    
                                    />
                                </ul>
                                <Button outline onClick={this.toggleModal}>
                                    <span className='fa fa-sign-in'> Add Comments</span>
                                </Button>
                            </div>
                        </div>
                    
                    
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                            <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                               
                                               
                           
                            <Row className='form-group'>
                                
                                <Col>
                                    <Control.select model='.rating' className='form-control' name="rating"  >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>                             
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="Name" md={2}>Name</Label>
                                <Col md={10}>
                                    <Control.text model='.Name' className='form-control' id='Name' name='Name' placeholder='Name' validators={{required,minLength: minLength(3), maxLength : maxLength(15)}}></Control.text>
                                    
                                    <Errors className='text-danger'
                                        model=".Name"
                                        show='touched'
                                        messages={{
                                            required : "Required ",
                                            minLength : 'Must be greater than 2 characters ',
                                            maxLength : 'Must be 15 characters or less '
                                        }}
                                    />

                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' className='form-control'  id='message' name='message' rows='12' />

                                </Col>
                            </Row>

                            

                            <Row className='form-group'>
                                
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </Row>
                            
                        </LocalForm>
                            </ModalBody>
                        </Modal>
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