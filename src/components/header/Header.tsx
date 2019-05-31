import React from 'react';
import logo from '../../logo.svg';

class Header extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="sign-in">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
        </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
