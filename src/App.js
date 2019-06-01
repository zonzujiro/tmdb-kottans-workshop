import React from 'react';
import { connect } from 'react-redux';

import { changeRole, ROLES } from './redux/roles';

import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  role: state.roles.current,
});

const mapDispatchToProps = {
  changeRole,
};

function App({ role, changeRole }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {role}

          <button onClick={() => changeRole(ROLES.ADMIN)}>
            DON'T PRESS THIS BUTTON!
          </button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
