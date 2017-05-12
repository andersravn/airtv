/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './RatingComponent.css';

export default class RatingComponent extends Component {
  constructor() {
    super();
    this.state = {
      score: 50
    }
  }
  render() {
    return (
      <div className="rating-component">
        <div className="rating-slider">
          <input type="range" onChange={this._handleRatingChange.bind(this)}/>
        </div>
        <div className="rating-score">
          <p>{this.state.score}%</p>
        </div>
      </div>
    );
  }

  _handleRatingChange(e) {
    this.setState({score: e.target.value});
  }
}
