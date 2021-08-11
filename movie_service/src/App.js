import React from 'react';

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

const foodILike= [{ } ]; 
 
function App() {
  return <div>{foodILike.map(renderFood)}</div>
}

export default App; 