/**
 * Created by andersravn on 07/05/2017.
 */
import React, { Component } from 'react';
import './SearchComponent.css';

export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-component">
        <input type="text" placeholder="Search for your favorite TV-shows" onKeyDown={this._handleInput.bind(this)} />
      </div>
    );
  }

  _handleInput (e) {
    // Checks if the pressed key is Enter.
    if (e.keyCode === 13) {
      this.props.handleSearchInput(e.target.value);
    }
  }
}
