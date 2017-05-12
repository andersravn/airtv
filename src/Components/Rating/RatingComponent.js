/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './RatingComponent.css';

export default class RatingComponent extends Component {
  render() {
    let showId = this.props.selectedShow.ids.trakt;
    return (
      <div className="rating-component">
        <div className="rating-slider">
          <input type="range"
                 value={this.props.getUserRating(this.props.selectedShow.ids.trakt)}
                 onChange={this._handleRatingChange.bind(this)}/>
        </div>
        <div className="rating-score">
          <p>{this.props.getUserRating(showId)}%</p>
        </div>
      </div>
    );
  }

  _handleRatingChange(e) {
    let rating = e.target.value;
    let showId = this.props.selectedShow.ids.trakt;
    this.props.setUserRating(showId, rating);
  }
}
