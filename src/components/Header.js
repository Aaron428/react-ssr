import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/" style={{marginRight: 40}}>
      go home
    </Link>
    <Link to="/login">To Login</Link>
  </div>
);

export default Header;
