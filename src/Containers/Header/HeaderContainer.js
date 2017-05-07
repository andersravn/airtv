/**
 * Created by andersravn on 06/05/2017.
 */
import React, { Component } from 'react';
import './HeaderContainer.css';

import Logo from '../../Components/Logo/Logo';

export default class HeaderContainer extends Component {
  render() {
    return (
      <div className="header-container">
        <Logo />
      </div>
    );
  }
}