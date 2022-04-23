import * as React from 'react';
import '../dist/css/bootstrap.css';


class LastAttemptsComponent extends React.Component {
   render() { 
        return (
            <div className="row">
            <div className="col-md-12">
            <table>
                <thead>
                  <tr>
                    <th className="text-center btn-success" style={{'padding':'17px'}}>Challenge</th>
                    <th className="text-center" style={{'padding':'17px', 'background-color':'darkgray'}}>Your guess</th>
                    <th className=" btn-danger text-center" style={{'padding':'17px'}}>Correct</th>
                    <th className="btn-info text-center" style={{'padding':'17px'}}>Date</th>
                  </tr>
                </thead>
                <tbody> 
                {this.props.lastAttempts.map(a =>
                    <tr className="btn-primary" key={a.id}
                        style={{ color: a.correct ? 'maroon' : ''}}>
                        <td className=" text-center" style={{'padding':'17px'}}>{a.factorA} x {a.factorB}</td>
                        <td className="text-center" style={{'padding':'17px'}}>{a.result_Attempt}</td>
                        <td className=" text-center" style={{'padding':'17px'}}>{a.correct ? "Correct" :
                            ("Incorrect (" + a.factorA * a.factorB + ")")}</td>
                        <td className="text-center" style={{'padding':'17px'}}>{a.when_Attempted}</td>
                    </tr>
                 )}
                </tbody>
            </table>
            </div>
            </div>
            
    ); }
  }
export default LastAttemptsComponent;
