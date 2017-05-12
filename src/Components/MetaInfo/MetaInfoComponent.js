/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './MetaInfoComponent.css';

export default class MetaInfoComponent extends Component {
  render() {
    return (
      <div className="meta-info-component">
        <div className="meta-info-title">
          {this.props.selectedShow.title}
        </div>
        <div className="meta-info-air-date">
          Airing: Mon May 4th
        </div>
      </div>
    );
  }
}
