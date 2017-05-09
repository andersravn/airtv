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
      searchResults: [{"type":"show","score":1350.9846,"show":{"title":"Friends","year":1994,"ids":{"trakt":1657,"slug":"friends","tvdb":79168,"imdb":"tt0108778","tmdb":1668,"tvrage":3616}}},{"type":"show","score":42.268085,"show":{"title":"Homeland","year":2011,"ids":{"trakt":1398,"slug":"homeland","tvdb":247897,"imdb":"tt1796960","tmdb":1407,"tvrage":27811}}},{"type":"show","score":22.846878,"show":{"title":"House","year":2004,"ids":{"trakt":1399,"slug":"house","tvdb":73255,"imdb":"tt0412142","tmdb":1408,"tvrage":3908}}},{"type":"show","score":14.630983,"show":{"title":"Friends with Better Lives","year":2014,"ids":{"trakt":58436,"slug":"friends-with-better-lives","tvdb":269782,"imdb":"tt2742174","tmdb":58823,"tvrage":34666}}},{"type":"show","score":11.9045,"show":{"title":"Friends With Benefits","year":2011,"ids":{"trakt":9728,"slug":"friends-with-benefits","tvdb":163571,"imdb":"tt1604113","tmdb":9777,"tvrage":null}}},{"type":"show","score":6.1676283,"show":{"title":"Garfield & Friends","year":1988,"ids":{"trakt":4582,"slug":"garfield-friends","tvdb":77054,"imdb":"tt0094469","tmdb":4606,"tvrage":null}}},{"type":"show","score":5.364857,"show":{"title":"Happy Tree Friends","year":1999,"ids":{"trakt":1121,"slug":"happy-tree-friends","tvdb":80534,"imdb":null,"tmdb":1126,"tvrage":null}}},{"type":"show","score":5.2571683,"show":{"title":"Foster's Home for Imaginary Friends","year":2004,"ids":{"trakt":1708,"slug":"foster-s-home-for-imaginary-friends","tvdb":79323,"imdb":"tt0419326","tmdb":1720,"tvrage":3587}}},{"type":"show","score":4.8925943,"show":{"title":"How I Met Your Mother","year":2005,"ids":{"trakt":1095,"slug":"how-i-met-your-mother","tvdb":75760,"imdb":"tt0460649","tmdb":1100,"tvrage":3918}}},{"type":"show","score":4.351604,"show":{"title":"Natsume's Book of Friends","year":2008,"ids":{"trakt":57330,"slug":"natsume-s-book-of-friends","tvdb":82788,"imdb":"tt1352421","tmdb":57702,"tvrage":null}}}]
    };
  }

  render() {
    let heading = null;
    if (this.state.searchResults.length > 0) {
      heading = <h2>SEARCH RESULTS</h2>;
    }
    return (
      <div className="search-container">
        <SearchComponent handleSearchInput={this._makeSearch.bind(this)} />
        {heading}
        <SearchResultsComponent searchResults={this.state.searchResults}/>
      </div>
    );
  }

  componentDidMount () {
    this._setDummyResults();
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

  _setDummyResults () {
    const results = [{"type":"show","score":1350.9846,"show":{"title":"Friends","year":1994,"ids":{"trakt":1657,"slug":"friends","tvdb":79168,"imdb":"tt0108778","tmdb":1668,"tvrage":3616}}},{"type":"show","score":42.268085,"show":{"title":"Homeland","year":2011,"ids":{"trakt":1398,"slug":"homeland","tvdb":247897,"imdb":"tt1796960","tmdb":1407,"tvrage":27811}}},{"type":"show","score":22.846878,"show":{"title":"House","year":2004,"ids":{"trakt":1399,"slug":"house","tvdb":73255,"imdb":"tt0412142","tmdb":1408,"tvrage":3908}}},{"type":"show","score":14.630983,"show":{"title":"Friends with Better Lives","year":2014,"ids":{"trakt":58436,"slug":"friends-with-better-lives","tvdb":269782,"imdb":"tt2742174","tmdb":58823,"tvrage":34666}}},{"type":"show","score":11.9045,"show":{"title":"Friends With Benefits","year":2011,"ids":{"trakt":9728,"slug":"friends-with-benefits","tvdb":163571,"imdb":"tt1604113","tmdb":9777,"tvrage":null}}},{"type":"show","score":6.1676283,"show":{"title":"Garfield & Friends","year":1988,"ids":{"trakt":4582,"slug":"garfield-friends","tvdb":77054,"imdb":"tt0094469","tmdb":4606,"tvrage":null}}},{"type":"show","score":5.364857,"show":{"title":"Happy Tree Friends","year":1999,"ids":{"trakt":1121,"slug":"happy-tree-friends","tvdb":80534,"imdb":null,"tmdb":1126,"tvrage":null}}},{"type":"show","score":5.2571683,"show":{"title":"Foster's Home for Imaginary Friends","year":2004,"ids":{"trakt":1708,"slug":"foster-s-home-for-imaginary-friends","tvdb":79323,"imdb":"tt0419326","tmdb":1720,"tvrage":3587}}},{"type":"show","score":4.8925943,"show":{"title":"How I Met Your Mother","year":2005,"ids":{"trakt":1095,"slug":"how-i-met-your-mother","tvdb":75760,"imdb":"tt0460649","tmdb":1100,"tvrage":3918}}},{"type":"show","score":4.351604,"show":{"title":"Natsume's Book of Friends","year":2008,"ids":{"trakt":57330,"slug":"natsume-s-book-of-friends","tvdb":82788,"imdb":"tt1352421","tmdb":57702,"tvrage":null}}}];
    this.setState({searchResults: results});
  }
}
