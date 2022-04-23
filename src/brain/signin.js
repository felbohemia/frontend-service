import React from 'react';
import Modal from './Modal';
import './size.css';




class SignIn extends React.Component{


    render(){
      
    return(
             <div align="center" className="App-header">
            
                <form className="form-signin btn-success">
                    <h2 className="form-signin-heading text-center">Please Sign In</h2>
                    
                    <label htmlFor="inputEmail" className="sr-only text-center">Enter Your Registered Email here</label>
                    
                    <input type="email"  name="user" onChange={this.props.handleChange} className="form-control" placeholder="Enter Your Registered Email here"/>
                   
                    <label htmlFor="inputPhone" className="sr-only">Enter Your Registered Phone dial here</label>
                    
                    <input type="password"  name="password" onChange={this.props.handleChange} className="form-control" placeholder="Enter Your Password"/>
                   
                    <button className="btn btn-lg btn-primary btn-block form-control" onClick={this.props.handleLogin} type="button">Sign In</button>
                    
                    <p> Don't have an account?<button className="btn btn-lg btn-primary btn-block form-control" onClick={this.props.onSignUpClicked} type="button">Sign Up</button></p>

              </form>
              <Modal show ={this.props.show} onClose ={this.props.onClose} content={this.props.content} />
             </div>

           
        );
    }
 }

 

export default SignIn;
