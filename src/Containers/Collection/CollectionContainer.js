/**
 * Created by andersravn on 06/05/2017.
 */
import React, { Component } from 'react';
import './CollectionContainer.css';

import axios from 'axios';

export default class Collection extends Component {
  render() {
    return (
      <div className="collection-container">
        <h2>MY COLLECTION</h2>
      </div>
    );
  }

  componentDidMount () {
    let instance = axios.create({
      baseURL: 'https://api.trakt.tv/',
      headers: {
        'Content-type': 'application/json',
        'trakt-api-key': '65da2a345cf9396b867884c38a13af0bd2dfad3a19788dd70d52777694467ab4',
        'trakt-api-version': '2'}
    });
    instance.get('/shows/trending')
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
