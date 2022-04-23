import React from 'react';
import Modal from './Modal';
import './signin.css';


class SignUp extends React.Component {


   render(){
      
      return(
             <div align="center">

                <form className="form-signin btn-success">
                    <h2 className="form-signin-heading text-center">Account Creation</h2>
                    
                    <label htmlFor="inputEmail" className="sr-only">Enter Your Email here</label>
                    
                    <input type="email" id="inputEmail"  name="user" onChange={this.props.handleChange} className="form-control text-center" placeholder="Enter Your Email here"/>
                   
                    <label htmlFor="inputPhone" className="sr-only text-center">Enter Your Phone here</label>
                    
                    <input type="phone" id="inputPhone" name="password" onChange={this.props.handleChange} className="form-control text-center" placeholder="Enter Your Password here"/>
                   
                    <button className="btn btn-lg btn-primary btn-block form-control" onClick={this.props.onSignUpClicked} type="button">Sign Up</button>

              </form>
              <Modal show ={this.props.show} onClose ={this.props.onClose} content={this.props.content} />

             </div>
           
        );
    }
 }

 

export default SignUp;
