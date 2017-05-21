/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './ShowComponent.css';
import poster from '../../images/poster.png';

import axios from 'axios';

import DateComponent from '../Date/DateComponent';

export default class ShowComponent extends Component {
  constructor () {
    super();
    this.state = {
      posterPath: poster,
      airDate: null
    }
  }
  render() {
    return (
      <div className="show-component" onClick={this._handleClick.bind(this)}>
        <img src={this.state.posterPath} width={234} alt={this.props.show.title}/>
        <div className="show-overlay">
          <div className="show-title">
            {this.props.show.title}
          </div>
          <div className="show-meta-container">
            <div className="show-rating">
              Your rating: {(this.props.rating) ? `${this.props.rating}%` : 'N/A'}
            </div>
            <div className="show-air-date">
              Airing on <br/>
              <DateComponent airDate={this.state.airDate}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this._getPoster();
    this._getAirDate();
  }

  _getPoster() {
    axios.get('https://api.themoviedb.org/3/tv/' + this.props.show.ids.tmdb + '?api_key=85f02725ebcffa87e1b8b4821784a044')
      .then(response => {
        this.setState({posterPath: 'https://image.tmdb.org/t/p/w300/' + response.data.poster_path})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  _getAirDate() {
    let instance = axios.create({
      baseURL: 'https://api.trakt.tv/',
      headers: {
        'Content-type': 'application/json',
        'trakt-api-key': '65da2a345cf9396b867884c38a13af0bd2dfad3a19788dd70d52777694467ab4',
        'trakt-api-version': '2'}
    });
    instance.get('/shows/' + this.props.show.ids.slug + '/next_episode')
      .then(response => {
        if (response.data) {
          instance.get(
            '/shows/' + this.props.show.ids.slug + '/seasons/' + response.data.season +
            '/episodes/' + response.data.number + '?extended=full')
            .then(response => {
              this.setState({airDate: response.data.first_aired});
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  _handleClick() {
    let show = this.props.show;
    show.airDate = this.state.airDate;
    this.props.showInfoBar(show);
  }
}
