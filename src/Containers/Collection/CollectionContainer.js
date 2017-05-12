/**
 * Created by andersravn on 06/05/2017.
 */
import React, { Component } from 'react';
import './CollectionContainer.css';

import ShowComponent from '../../Components/Show/ShowComponent';

export default class CollectionContainer extends Component {
  render() {
    let shows = this._getShows();
    return (
      <div className="collection-container">
        <div className="collection-shows">
          {shows}
        </div>
      </div>
    );
  }

  _getShows() {
    let shows = [];
    this.props.collection.forEach(show => {
      shows.push(<ShowComponent show={show} showInfoBar={this.props.showInfoBar} key={show.ids.trakt}/>);
    });
    return shows;
  }
}
