import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import TextareaAndSelectTagDemo from './components/dynamicListsDemo/TextareaAndSelectTagDemo';
import {listItems, MoviesList} from './components/ListDemo'
import DynamicMoviesList from './components/dynamicListsDemo/DynamicMoviesList';



class App extends Component {

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0,
    backColor: "yellow"
  };

  clickHandler = () => {
    const newCount = this.state.clickCount + 1;
    

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: this.colorMapper()
      });
    } else {
      this.setState({
        clickCount: newCount,
        backColor: "yellow",
        userA: {
          firstName: "Jon",
          lastName: "Doe",
          avatarUrl:
            "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        },
        userB: {
          firstName: "Susanne",
          lastName: "Smith",
          avatarUrl:
            "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        },
        
      });
    }
  };

  render() {
    return (
      <div className="App">
      {/*
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          image={this.state.userB.avatarUrl}
      
          <Header></Header>
          <ul>{listItems}</ul>/>*/}
          <div><MoviesList /></div>
          <hr />
          <DynamicMoviesList />
          <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;
