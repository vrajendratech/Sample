import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a sports Car!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));

//ReactDOM.render(myfirstelement, document.getElementById('root'));