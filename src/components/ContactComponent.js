import React ,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Form,FormGroup,Label,Input,Col,FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state={
            firstname:'',
            lastname:"",
            telnumber:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched : {
                firstname: false,
                lastname: false,
                telnumber: false,
                email: false
            }

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.handleInputChange = this.handleInputChange.bind(this)

        this.handleBlur = this.handleBlur.bind(this)

    }

    handleBlur = (field) =>(evt)=>  {
        this.setState({
            touched : { ...this.state.touched , [field] : true}
        })

    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked :target.value
        const name =  target.name

        this.setState({
            [name] : value
        })
    }

    validate(firstname,lastname,tel,email){
        const errors = {
            firstname:'',
            lastname:"",
            telnumber:'',
            email:'',
        }
        if (this.state.touched.firstname && firstname.length <3)
            errors.firstname = "First Name should be >= 3 characters"
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = "First Name should be <= 10 characters "

        if (this.state.touched.lastname && lastname.length <3)
            errors.lastname = "Last Name should be >= 3 characters"
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = "Last Name should be <= 10 characters "
        
        const reg =/^\d+$/
        if (this.state.touched.telnumber && !reg.test(tel))
            errors.telnumber = "Tel. Number must constain only numbers"

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "Email must contain an @ sign"
        console.log(errors)
        return errors;
    }

    handleSubmit(event){
        console.log("current state is: " + JSON.stringify(this.state))
        alert("Current state is: " + JSON.stringify(this.state))
        event.preventDefault();
    }

    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname , this.state.telnumber, this.state.email)

        return(
            <div className="container">
                <div className="row">
                        <Breadcrumb>
                            
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contact</h3>
                            <hr />
                        </div>
                    </div>
                
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href='#'><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className="col-12">
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input onBlur={this.handleBlur('firstname')} onChange={this.handleInputChange} valid={errors.firstname === ''} invalid={errors.firstname !== ''} type="text" id='firstname' name='firstname' placeholder='First Name' value={this.state.firstname}></Input>
                                    
                                    <FormFeedback>
                                        {errors.firstname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange} valid={errors.lastname === ''} invalid={errors.lastname !== ''} type="text" id='lastname' name='lastname' placeholder='Last Name' value={this.state.lastname}></Input>
                                    
                                    <FormFeedback>
                                        {errors.lastname}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input onBlur={this.handleBlur('telnumber')} onChange={this.handleInputChange} valid={errors.telnumber === ''} invalid={errors.telnumber !== ''}  type="tel" id='telnum' name='telnum' placeholder='Tel Number' value={this.state.telnumber}></Input>
                                    <FormFeedback>
                                        {errors.telnumber}
                                    </FormFeedback>
                                </Col>
                            </FormGroup>    
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" onBlur={this.handleBlur('email')} onChange={this.handleInputChange} valid={errors.email === ''} invalid={errors.email !== ''} id='email' name='email' placeholder='Email' value={this.state.email}></Input>
                                    <FormFeedback>
                                        {errors.email}
                                    </FormFeedback>
                                </Col>
                                
                            </FormGroup>
                           
                            <FormGroup row>
                                <Col md={{size: 6 , offset : 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' onChange={this.handleInputChange} name='agree' checked={this.state.agree} ></Input>{' '}<strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3 , offset:1}}>
                                    <Input type='select' name="contactType" onChange={this.handleInputChange} value={this.state.contactType} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>                             
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" onChange={this.handleInputChange} id='message' name='message' rows='12' value={this.state.message}></Input>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </FormGroup>
                            
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
    }
    
    

export default Contact;