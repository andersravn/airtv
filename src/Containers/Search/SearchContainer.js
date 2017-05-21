/**
 * Created by andersravn on 06/05/2017.
 */
import React, { Component } from 'react';
import './SearchContainer.css';

import axios from 'axios';

import SearchComponent from '../../Components/Search/SearchComponent';
import SearchResultsComponent from '../../Components/SearchResults/SearchResultsComponent';

export default class SearchContainer extends Component {
  constructor () {
    super();
    this.state = {
      searchResults: []
    };
  }

  render() {
    let heading = null;
    if (this.state.searchResults.length > 0) {
      heading = <h2 className="heading-search-results">SEARCH RESULTS</h2>;
    }
    return (
      <div className="search-container">
        <SearchComponent handleSearchInput={this._makeSearch.bind(this)} />
        {heading}
        <SearchResultsComponent searchResults={this.state.searchResults} collection={this.props.collection} addShow={this.props.addShow} />
      </div>
    );
  }

  _makeSearch (query) {
    console.log(query);
    let instance = axios.create({
      baseURL: 'https://api.trakt.tv/',
      headers: {
        'Content-type': 'application/json',
        'trakt-api-key': '65da2a345cf9396b867884c38a13af0bd2dfad3a19788dd70d52777694467ab4',
        'trakt-api-version': '2'}
    });
    instance.get('/search/show?query=' + query)
      .then(response => {
        let searchResults = response.data.map((result) => {
          return result.show;
        });
        this.setState({searchResults: searchResults});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
