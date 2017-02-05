import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Beeer</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <IndexLink to="/" activeClassName="active">Home</IndexLink>
            </li>
            <li><Link to="measurements" activeClassName="active">Measurements</Link></li>
            <li><Link to="sensors" activeClassName="active">Sensors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Header;