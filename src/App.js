import  React, { Component } from 'react';
import logo from './logo.svg';
import TodoApp from './TodoApp'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      header: "You are in the jungle now"
    }
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.state.header}</h1>
          <h1>You're in the jungle now </h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <TodoApp name="Thom" handleChange={this.handleAppChange}/>
          <TodoApp name="Mihalis" />
        
      </div>
    );
  }
handleAppChange = (e) => {
  this.setState({header: e.target.value})
}
  

}
export default App