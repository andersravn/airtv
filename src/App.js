import React, { Component } from 'react';
import './App.css';

import HeaderContainer from './Containers/Header/HeaderContainer';
import Collection from './Containers/Collection/CollectionContainer';
import SearchContainer from './Containers/Search/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <SearchContainer/>
        <Collection/>
      </div>
    );
  }
}

export default App;
