import React, {Component} from 'react';

class DateComponent extends Component {
  render() {
    let airDate = 'N/A';
    if (this.props.airDate) {
      let date = new Date(this.props.airDate);
      let dayOfTheWeek = this._getDayOfTheWeek(date.getDay());
      let month = this._getMonth(date.getMonth());
      airDate = `${dayOfTheWeek} ${month} ${date.getDate()}`;
    }
    return (
      <span>{airDate}</span>
    );
  }

  _getDayOfTheWeek(day) {
    switch (day) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return '';
    }
  }

  _getMonth(month) {
    switch (month) {
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
      default:
        return '';
    }
  }
}

export default DateComponent;