/**
 * Created by andersravn on 12/05/2017.
 */
import React, { Component } from 'react';
import trashIcon from '../../images/trashIcon.svg';
import './MetaInfoComponent.css';

import DateComponent from '../Date/DateComponent';

export default class MetaInfoComponent extends Component {
  render() {
    return (
      <div className="meta-info-component">
        <div className="meta-info-title">
          {this.props.selectedShow.title}
          <div className="trash-icon" onClick={this._handleClick.bind(this)}>
            <img src={trashIcon} width={20} height={20} alt="Remove"/>
          </div>
        </div>
        <div className="meta-info-air-date">
          Airing on <br/>
          <DateComponent airDate={this.props.selectedShow.airDate}/>
        </div>
      </div>
    );
  }

  _handleClick() {
    this.props.removeShow();
  }
}
