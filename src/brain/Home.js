// pages/Home.js
import React from "react";
import logo from '../img/images.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import './spacecontainer.css';

class Home extends React.Component{

  render(){

    return(
          <div>
            <h1 className="text-center">BrainTrainer, By Coders-Pathway INC</h1>
            <div className="container">
               <div className="row" style={{'font-size': '16pt'}}>
                   
                   <div className="col-md-6 col-xs-6">
                        <img src={logo} className="img-responsive" />
                        
                   </div>
                   <div className="col-md-6 col-xs-6 text-left">
                        Studies have it that the more you use your brain<br />
                        the greater the density of your brain's network ( Your brain cells get more and more connected to one another).<br/><br/>
                     <p>In other words, the more your tendency to remember and learn new
                         concepts faster.</p>

                         <p>The BrainTrainer application is a simple application
                         meant to train your brain.
                         <br /><br />It trains your  brain by providing simple multiplication challenges randomly consisting
                         of two digits whole numbers and then wait for you solve using your brain(paper and pen only... no calculator)
                         </p>
                         <p>
                           With every new attempt, it displays a table detailing your previous attempts so 
                           you have a clue whether your preformance is improving or not.<br /> 
                           <span className="btn-success"><em>As a rule,
                           make sure you overcome the temptation of trying to use calculator!</em></span>
                         </p>
                         <p>
                           To get started, click <a href="./main">Main Area</a> To sign up or login
                         </p>
                        
                      </div>
                 </div>
             </div>
          </div>
       );
     }
}

export default Home;