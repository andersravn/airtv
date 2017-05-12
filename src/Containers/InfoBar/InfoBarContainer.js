/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import './InfoBarContainer.css';

import MetaInfoComponent from '../../Components/MetaInfo/MetaInfoComponent';
import RatingComponent from '../../Components/Rating/RatingComponent'

export default class InfoBarContainer extends Component {
  render() {
    return (
      <div className="info-bar-container">
        <MetaInfoComponent/>
        <RatingComponent/>
      </div>
    );
  }
}
