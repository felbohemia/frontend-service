import React from 'react';
//import './dist/css/bootstrap.css';
import '../App.css';

import ApiClient from "./ApiClient";

import './signin.css';

import SignUp from './signup';
import SignIn from './signin';
import Modal from './Modal';
import ChallengeComponent from './ChallengeComponent';

class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {

      a: '',
      b: '',
      user: '',
      message: '',
      token:'',
      guess: 0,
      lastAttempts: [],
      leaders: [],
      password: '',
      userIsNotLogin: true,
      userHasNoAccount: false,
      showChallenge:false,
      show:false,
      showSucReg:false
    };

    this.handleSubmitResult = this.handleSubmitResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGetByEmail = this.handleGetByEmail.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.updateLastAttempts = this.updateLastAttempts.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.onCloseModel = this.onCloseModel.bind(this);
    this.handleSignUpClicked = this.handleSignUpClicked.bind(this);
    this.onCloseSucReg = this.onCloseSucReg.bind(this);
    this.handleGetLeaders = this.handleGetLeaders.bind(this);

    setInterval(()=>{this.handleGetLeaders()}, 8000);

  }


  handleChange(event) {
        const name = event.target.name; 
        this.setState({
             [name]: event.target.value
       });
    }

  updateMessage(info: string){
       this.setState({
        message: info
       });
    }

    handleSignUp(event){
      this.setState({
        userIsNotLogin:false,
        userHasNoAccount: true
      })
    }

    onCloseSucReg(){
      this.setState({
        showSucReg:false,
        userHasNoAccount:false,
        userIsNotLogin:true
      })
    }

  handleSubmitResult(event){

      //event.preventDefault();

        if(this.state.guess <= 120)
        {
          this.updateMessage("Invalid guess, your guess must be greater than 120!");
          return;
        }
        //console.log("======="+ this.state.user);
        ApiClient.sendGuess(this.state.user,this.state.a, this.state.b, this.state.guess, this.state.token)
        .then((response)=>{
               
            if(response.ok){
              response.json().then((res)=>{
                
                if(res.correct){
                   this.updateMessage("Congratulation!, your guess is correct");
                   this.setState({
                    guess: ''
                   })
                   this.onCloseModel();
                }else{
                   this.updateMessage("Sorry, your guess is incorrect!");
                   this.setState({
                    guess: ''
                   })
                }

                this.updateLastAttempts(this.state.user);
              });
            }
            else{
                this.updateMessage("Error connecting to the server");
            }
          })

    }

    onCloseModel(){

       ApiClient.challenge(this.state.token).then((response)=>{
                  if(response.ok){

                        response.json().then((res)=>{
                          this.setState({
                            a:res.factorA,
                            b: res.factorB,
                            showChallenge: true,
                            userIsNotLogin:false,
                            show:false
                          });
                        })
                  }
                  else{
                       this.updateMessage("Can't reach the server");
                   }
              });

    }

    handleSignUpClicked(){

      ApiClient.registerUser(this.state.user, this.state.password)
       .then((response)=>{
             
          if(response.ok){
            response.json().then((res)=>{
              
              this.setState({
                message: "Registration Successfull...",
                showSucReg: true,

                
              });
                      
           });
         }
          else{
                
                this.setState({
                message: "Sorry, your email already exist in our system...",
                showSucReg: true

                
              });
          }
        });
    }
    
    handleLogin(event){

       ApiClient.sendUserDetails(this.state.user, this.state.password)
       .then((response)=>{
             
          if(response.ok){
            response.json().then((res)=>{
              
              this.setState({
                token: res.token,
                message: "Login Successfull...",
                show: true,

                
              });
                      
           });
         }
          else{

                this.setState({
                message: "Invalid credentials...",
                showSucReg: true,
                userIsNotLogin:false                
              });
          }
        });
    }

    handleGetByEmail(){

         ApiClient.getTodoByEmail(this.state.token).then((response)=>{

          if(response.ok){

            response.json().then((res)=>{
                        let todos = "";
                 //this.updateMessage(res);

                          res.map((todo)=>{
                            todos += "id: " + todo.id+"\n";
                            todos += "description: "+ todo.description+"\n";
                            todos += "created: "+ todo.created+"\n";
                            todos += "modified: "+todo.modified+"\n";
                            todos += "completed: "+todo.completed+"\n\n";

                             })

                          this.updateMessage(todos);

              });
          }else{
            this.updateMessage("Email does not exist")
          }

          })
    }

    updateLastAttempts(userAlias: string) {
    ApiClient.getAttempts(userAlias, this.state.token).then(res => {
      if (res.ok) {

        let attempts =  [];
        res.json().then(data => {
                      data.forEach(item => {
                        attempts.push(item);
                    });
         this.setState({ 
          lastAttempts: attempts
          });
      })
     } 
  })
}

handleGetLeaders() {
    if(!this.state.userIsNotLogin){
            ApiClient.getLeaders(this.state.token).then(res => {
      if (res.ok) {

        res.json().then(data => {
                  
         this.setState({ 
          leaders: data
          });
      })
     }
  }).catch(error =>{console.log(error)})
    }
}

  render(){

      return(
             <div className="App">

               {this.state.userIsNotLogin?(<SignIn onSignUpClicked = {this.handleSignUp} handleLogin = {this.handleLogin} 
                handleChange= {this.handleChange} message={this.state.message} show={this.state.show} onClose={this.onCloseModel} content={this.state.message}/>): ''}

               {this.state.userHasNoAccount?(<SignUp onSignUpClicked = {this.handleSignUpClicked} 
                handleChange= {this.handleChange} show={this.state.showSucReg} onClose={this.onCloseSucReg} content={this.state.message}/>): ''}

               {this.state.showChallenge?(<ChallengeComponent a={this.state.a} b={this.state.b} message={this.state.message} user={this.state.user} 
                handleChange={this.handleChange}
                 handleSubmitResult={this.handleSubmitResult} lastAttempts={this.state.lastAttempts} leaders={this.state.leaders} guess={this.state.guess} />):''}

               {this.state.showSucReg?(<Modal show ={this.state.showSucReg} onClose ={this.onCloseSucReg} 
                content={this.state.message} />):''}

              
             </div>

         );

   }
}



export default Main;
