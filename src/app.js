import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from 'base-component';

class App extends BaseComponent {
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
