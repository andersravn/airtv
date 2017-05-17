/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import closeIcon from '../../images/closeIcon.svg';
import './InfoBarContainer.css';

import MetaInfoComponent from '../../Components/MetaInfo/MetaInfoComponent';
import RatingComponent from '../../Components/Rating/RatingComponent'

export default class InfoBarContainer extends Component {
  render() {
    return (
      <div className="info-bar-container">
        <MetaInfoComponent
          selectedShow={this.props.selectedShow}
          removeShow={this.props.removeShow}/>
        <RatingComponent
          selectedShow={this.props.selectedShow}
          getUserRating={this.props.getUserRating}
          setUserRating={this.props.setUserRating}/>
        <div className="hide-button" onClick={this.props.hideInfoBar}>
          <img src={closeIcon} width={30} height={30} alt="Close"/>
        </div>
      </div>
    );
  }
}
