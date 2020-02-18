import React from 'react';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(r => r.json())
    .then(console.log)
  }

  render(){
  return (
    <div className="App">
      <h1>get heard</h1>
    </div>
  );
  
  }
 
}

export default App;
