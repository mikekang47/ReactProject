import axios from 'axios'; 
import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
      const movies = await axios.get("http://yts-proxy.now.sh/ist_moives.json");
  };

  conponentDidMount() {
    this.getMovies();

  }

  render(){
    const {isLoading} = this.state;
    return <div>{
      isLoading ? "Loading..." : "We are ready"}
      </div>;
  }

}
 
export default App; 