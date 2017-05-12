/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './ShowComponent.css';
import poster from './friends.jpg';

import axios from 'axios';

export default class ShowComponent extends Component {
  constructor () {
    super();
    this.state = {
      posterPath: poster
    }
  }
  render() {
    // this._getPoster();

    return (
      <div className="show-component" onClick={this._handleClick.bind(this)}>
        <img src={this.state.posterPath} width={234} alt={this.props.show.title}/>
        <div className="show-overlay">
          <div className="show-title">
            {this.props.show.title}
          </div>
          <div className="show-meta-container">
            <div className="show-rating">
              Your rating: {this.props.rating}%
            </div>
            <div className="show-air-date">
              Airing on <br/>
              Mon May 4th
            </div>
          </div>
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

  _handleClick() {
    this.props.showInfoBar(this.props.show);
  }
}
