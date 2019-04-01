import React from 'react';
import logo from '../logo.svg'; // importing logo from src folder
import Title from './Title'

const header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Title>Welcome to React, Ironhacker!</Title>
      <h3>You are ready to take this to the next level!!!!!</h3>
    </header>
  );
}

export default header;