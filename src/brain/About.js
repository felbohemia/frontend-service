
// pages/About.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../img/images.jpeg';
import './spacecontainer.css';

const About = () => (
  <div className="container">
    

      <div align="center" style={{'font-size':'30pt', 'font-weigth':'bold', 'color':'maroon'}}>
          <p>
            <img src={logo} className="img-responsive" />
            <br />Brain<span style={{'color':'darkblue'}}>Trainer</span>
          </p>

                                 
      </div>


    <p className="text-center" style={{'font-size':'17pt', 'font-weigth':'bold'}}>
      The BrainTrainer application is written and own by Coders-Pathway INC<br /><br />
      This application's front-end was written in react while the backend is written using spring boot
    </p>
  </div>
);

export default About;