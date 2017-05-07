/**
 * Created by andersravn on 07/05/2017.
 */
import React, { Component } from 'react';
import './ShowSearchResultComponent.css';

import axios from 'axios';

export default class ShowSearchResultComponent extends Component {
  constructor () {
    super();
    this.state = {
      posterPath: null
    }
  }
  render() {
    this._getPoster();
    return (
      <div className="show-search-result-component">
        <img src={this.state.posterPath} alt={this.props.show.title}/>
        <div className="show-search-result-overlay">
          <span className="show-search-result-title">{this.props.show.title}</span>
          <button className="add-button">Add to collection</button>
        </div>
      </div>
    );
  }

  _getPoster () {
    axios.get('https://api.themoviedb.org/3/tv/' + this.props.show.ids.tmdb + '?api_key=85f02725ebcffa87e1b8b4821784a044')
      .then(response => {
        this.setState({posterPath: 'https://image.tmdb.org/t/p/w300/' + response.data.poster_path})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
