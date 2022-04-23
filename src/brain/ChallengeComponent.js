import * as React from "react";
import LastAttemptsComponent from './LastAttemptsComponent';
import '../App.css';
import LeaderBoardComponent from './leader.js';


class ChallengeComponent extends React.Component
{
	
    render() { 
    	return (
          <div className="App">
           <div className="App-header">
				    <div>
							<h3>
							      Your new challenge is
							</h3> 
							<h1>
							    {this.props.a}   X   {this.props.b} 
							</h1>
					  </div>
			      <form>
					        <label>
					            Your alias:
					            <input type="text" maxLength="12"
					                   name="user"
					                value={this.props.user}
					                onChange={this.props.handleChange} />
					        </label>
					        <br/>
					        <label>
					            Your guess:
					            <input type="number" min="0"
					            name="guess" value={this.props.guess} onChange={this.props.handleChange} />
		                    </label>
		                  <br/>
		                  <input type="button" onClick= {this.props.handleSubmitResult} value="Submit"/>
		                 
              </form>
              <br />
              <h3 className="text-center"> Leaders </h3>

              <LeaderBoardComponent leaders = {this.props.leaders} />

              <br />
                <h4>
                    {this.props.message}
                </h4>

                {this.props.lastAttempts.length > 0 &&
                   <LastAttemptsComponent lastAttempts={this.props.lastAttempts} />
                   }
          </div>
          </div>
           );
       }

}
export default ChallengeComponent ;