import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard';

class DynamicMoviesList extends Component {
  constructor(){
      super();
      this.state = {
        movies: [
          { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
          { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
          { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
        ]
      };
    }

      deleteMovieHandler = (movieIndex) => {
        const moviesCopy = [...this.state.movies];
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
      };

      addMovie = () => {
        const moviesCopyAdd = [...this.state.movies];
        moviesCopyAdd.push({title: "Harry Potter", director: "RickJames"});
        this.setState({
          movies: moviesCopyAdd
        })
      }
    
  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        {
            this.state.movies.map((oneMovie, index) => {
              return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
            })
        }
        <button onClick={()=>this.addMovie()}> Add Button</button>
      </div>
      
    );
  }
}

export default DynamicMoviesList;