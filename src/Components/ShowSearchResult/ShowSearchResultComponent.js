/**
 * Created by andersravn on 07/05/2017.
 */
import React, { Component } from 'react';
import './ShowSearchResultComponent.css';
import poster from '../../images/poster.png';

import axios from 'axios';

export default class ShowSearchResultComponent extends Component {
  constructor () {
    super();
    this.state = {
      posterPath: poster
    }
  }
  render() {
    let button = <button className="add-button" onClick={this._handleClick.bind(this)}>Add to collection</button>;
    if (this.props.collection.has(this.props.show)) {
      button = <button className="add-button-disabled">In my collection</button>
    }
    return (
      <div className="show-search-result-component">
        <img src={this.state.posterPath} width={234} alt={this.props.show.title}/>
        <div className="show-search-result-overlay">
          <div className="show-search-result-title">
            {this.props.show.title}
          </div>
          {button}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this._getPoster();
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

  _handleClick() {
    this.props.addShow(this.props.show);
  }
}
