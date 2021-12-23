import React from 'react';
import './styles/Home.css';
import robert from '../images/robert.png'

function Home() {
  return (
    <div className="home-background">
      <div className="robert-image">
        <img src={robert} alt="Robert.png" />
      </div>
    </div>
  );
}

export default Home;
