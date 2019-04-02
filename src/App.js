import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { add, subtract } from './actions'

class App extends Component {
  
  renderProgressbar = () => {
    const { bars } = this.props;
    return bars.map((value, index) =>
      <div className="progress" key={index}>
        <div className="progress-bar" role="progressbar" aria-valuenow={value}  aria-valuemin="0" aria-valuemax="100">{value}</div>
      </div>
    );
  }

  render() {
    return(
      <div className="App">
        {this.renderProgressbar()}
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.subtract}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return { bars : state.bars}
}

export default connect(mapStateToProps,{add, subtract})(App);
