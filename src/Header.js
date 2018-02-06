import React, { Component } from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import './App.less';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <ButtonToolbar>
            <Button bsStyle="link">The Queen City</Button>
            <Button bsStyle="link">My Reservations</Button>
            <Button bsStyle="link">Guide</Button>
          </ButtonToolbar>
        </header>
    );
  }
}

{/* <p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p> */}


export default Header;
