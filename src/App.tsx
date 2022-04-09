import React from 'react';
import './App.css';
import Carousel from './component/carousel';

const ele = ['http://cdn.collider.com/wp-content/uploads/127_hours_movie_poster_large_01.jpg', 'https://imgc.allpostersimages.com/img/posters/blade-runner-2049-fire-ice_u-L-F9524N0.jpg?', 'https://i.pinimg.com/originals/61/2b/bf/612bbfe53a59beb87e6dd2e8047d2866.jpg']


function App() {
  return (
    <div className="App">
      <Carousel slides={ele}></Carousel>
    </div >
  );
}

export default App;
