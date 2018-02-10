import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () =>{
  return (
    <div>
      My Work.
      Checkout the following things I've done.
      <Link to="/portfolio/1"> 1 Link </Link>
      <Link to="/portfolio/2"> 2 Link </Link>
    </div>
  );
};

export default Portfolio;