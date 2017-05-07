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
    return (
      <div className="search-container">
        <SearchComponent handleSearchInput={this._makeSearch.bind(this)} />
        <SearchResultsComponent searchResults={this.state.searchResults}/>
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
