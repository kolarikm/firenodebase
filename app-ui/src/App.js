import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    text: ''
  };

  componentDidMount() {
    this.callAPI()
    .then(res => this.setState({text: res.text}))
    .catch(err => console.log(err));
  };

  callAPI = async () => {
    const response = await fetch('/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.text}
        </p>
      </div>
    );
  }
}

export default App;
