import React from 'react';
import '../navbar-static-top.css';
import 'bootstrap/dist/css/bootstrap.css';
import './sticky-footer.css';
import logo from '../img/center.png';


const Footer = () =>{


	return(

	        <footer className="footer text-center">
         <div className ="container">
            <div className="row">
              <div className="col-md-3 col-xs-3">
                <img src={logo} className="img-responsive" />
                
              </div>
              <div className="col-md-3 col-xs-3">
                <h5>Our Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#">signup</a></li>
                  <li><a href="#">sign in</a></li>
                  <li><a href="#">terms and conditions</a></li>
                  <li><a href="#">privacy policy</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-3">
                <h5>Contacts</h5>
                <ul className="list-unstyled">
                  <li><a href="#"></a></li>
                  <li><a href="#">sign in</a></li>
                  <li><a href="#">terms and conditions</a></li>
                  <li><a href="#">privacy policy</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-3">
                <h5>Suggested Sites</h5>
                <ul className="list-unstyled">
                  <li><a href="#">signup</a></li>
                  <li><a href="#">sign in</a></li>
                  <li><a href="#">terms and conditions</a></li>
                  <li><a href="#">privacy policy</a></li>
                </ul>
              </div>

            </div>
         </div>
      </footer>
		)
}


export default Footer;
