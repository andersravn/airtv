/**
 * Created by andersravn on 07/05/2017.
 */
import React, { Component } from 'react';
import './SearchResultsComponent.css';

import ShowSearchResultComponent from '../ShowSearchResult/ShowSearchResultComponent';

export default class SearchResultsComponent extends Component {
  render() {
    let showSearchResults = this._getShowSearchResults();
    return (
      <div className="search-results-component">
        <div className="search-results">
          {showSearchResults}
        </div>
      </div>
    );
  }

  _getShowSearchResults () {
    return this.props.searchResults.map(result => {
      return <ShowSearchResultComponent show={result} collection={this.props.collection} addShow={this.props.addShow} key={result.ids.trakt}/>
    });
  }
}
