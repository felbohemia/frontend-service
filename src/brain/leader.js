import * as React from 'react';
import '../dist/css/bootstrap.css';


class LeaderBoardComponent extends React.Component {
   render() { 
        return (
            <div className="row">
            <div className="col-md-12">
            <table>
                <thead>
                  <tr>
                    <th className="text-center btn-success" style={{'padding':'17px'}}>Player Name</th>
                    <th className="text-center" style={{'padding':'17px', 'background-color':'darkgray'}}>Total Score</th>
                    <th className=" btn-danger text-center" style={{'padding':'17px'}}>Acquired Badges</th>

                  </tr>
                </thead>
                <tbody> 
                {this.props.leaders.map(leader=>
                        <tr>
                            <td className="text-center btn-success" style={{'padding':'17px'}}> {leader.userId}</td>
                            <td className="text-center btn-success" style={{'padding':'17px'}}> {leader.totalScore} </td>
                            <td className="text-center btn-success" style={{'padding':'17px'}}> {leader.badges.toString()}</td>
                        </tr> 
                 )}
                </tbody>
            </table>
            </div>
            </div>
            
    ); }
  }
export default LeaderBoardComponent;
