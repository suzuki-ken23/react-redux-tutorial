import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    const greeting = "Hi, Tom"
    const dom = <h1 className="foo">{greeting}</h1>
    return <input type="text" onClick={() => {console.log("I am clicked")}} />;
  }
}

export default App;
