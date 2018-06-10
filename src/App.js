import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    yoyo_response: ""
  };

  componentDidMount() {
    this.callApi("/api/yoyo")
      .then((res) => this.setState({ yoyo_response: res.text }))
      .catch((err) => console.log(err));
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.yoyo_response}</p>
      </div>
    );
  }
}

export default App;
