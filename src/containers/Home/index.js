import React from 'react';
import Header from '../../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <h2>React ssr Home Page!</h2>
      <button onClick={() => alert('you clicked!')}>click me!</button>
    </div>
  );
};

export default Home;
