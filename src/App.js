import React, { Component } from 'react';
import './App.css';

import HeaderContainer from './Containers/Header/HeaderContainer';
import CollectionContainer from './Containers/Collection/CollectionContainer';
import SearchContainer from './Containers/Search/SearchContainer';
import InfoBarContainer from './Containers/InfoBar/InfoBarContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      collection: new Set(),
      showInfoBar: false,
      selectedShow: null,
      userRatings: new Map()
    };
  }
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <SearchContainer addShow={this._addShowToCollection.bind(this)} collection={this.state.collection}/>
        <h2>MY COLLECTION</h2>
        <CollectionContainer
          collection={this.state.collection}
          showInfoBar={this._showInfoBar.bind(this)}
          getUserRating={this._getUserRating.bind(this)}/>
        {(this.state.showInfoBar) ?
          <InfoBarContainer
            selectedShow={this.state.selectedShow}
            getUserRating={this._getUserRating.bind(this)}
            setUserRating={this._setUserRating.bind(this)}
            removeShow={this._removeSelectedShowFromCollection.bind(this)}
            hideInfoBar={this._hideInfoBar.bind(this)}/>
          : null}
      </div>
    );
  }

  componentDidMount() {
    // this._setDummyShows();
    if (localStorage.userRatings) {
      let userRatings = new Map(JSON.parse(localStorage.userRatings));
      this.setState({userRatings});
    }

    if (localStorage.collection) {
      let collection = new Set(JSON.parse(localStorage.collection));
      this.setState({collection});
    }
  }

  _addShowToCollection(show) {
    let collection = this.state.collection;
    collection.add(show);
    this.setState({collection});
    localStorage.collection = JSON.stringify(Array.from(collection));
  }

  _removeSelectedShowFromCollection() {
    let collection = this.state.collection;
    collection.delete(this.state.selectedShow);
    this.setState({collection});
    localStorage.collection = JSON.stringify(Array.from(collection));
    this._hideInfoBar();
  }

  _showInfoBar(show) {
    this.setState({showInfoBar: true});
    this.setState({selectedShow: show});
  }

  _hideInfoBar() {
    this.setState({showInfoBar: false});
    this.setState({selectedShow: null});
  }

  _setUserRating(showId, rating) {
    let userRatings = this.state.userRatings;
    userRatings.set(showId, rating);
    this.setState({userRatings});
    localStorage.userRatings = JSON.stringify(Array.from(userRatings.entries()));
  }

  _getUserRating(showId) {
    let rating = this.state.userRatings.get(showId);
    if (rating) {
      return rating;
    } else {
      return 0;
    }
  }
}

export default App;
