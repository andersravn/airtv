/**
 * Created by andersravn on 06/05/2017.
 */
import React, { Component } from 'react';
import './CollectionContainer.css';

import FlipMove from 'react-flip-move';

import ShowComponent from '../../Components/Show/ShowComponent';

export default class CollectionContainer extends Component {
  render() {
    let sortedShows = this._sortShowObjectsByRating(this.props.collection);
    let shows = this._getShows(sortedShows);
    return (
      <div className="collection-container">
        <div className="collection-shows">
          <FlipMove duration={750} easing="ease-out">
            {shows}
          </FlipMove>
        </div>
      </div>
    );
  }

  _getShows(sortedShows) {
    return sortedShows.map((show) => {
      return <ShowComponent
        show={show}
        rating={this.props.getUserRating(show.ids.trakt)}
        showInfoBar={this.props.showInfoBar}
        key={show.ids.trakt}/>
    });
  }

  _sortShowObjectsByTitle(setOfShows) {
    let shows = [];
    setOfShows.forEach(show => {
      shows.push(show);
    });
    shows.sort((a, b) => {
      // Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=example
      let titleA = a.title.toUpperCase(); // ignore upper and lowercase
      let titleB = b.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return shows;
  }

  _sortShowObjectsByRating(setOfShows) {
    let shows = [];
    setOfShows.forEach(show => {
      show.rating = this.props.getUserRating(show.ids.trakt);
      shows.push(show);
    });
    shows.sort((a, b) => {
      return b.rating - a.rating;
    });
    return shows;
  }
}