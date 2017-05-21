import React, {Component} from 'react';
import './FooterContainer.css';

class FooterContainer extends Component {
  render() {
    let divStyle = null;
    if (this.props.collection.size === 0) {
      divStyle = {
        position: 'fixed',
        bottom: 0
      }
    }
    return (
      <div className="footer-container" style={divStyle}>
        <p>
          Created by Anders Ravn |
          Animations from <a href="https://github.com/joshwcomeau/react-flip-move">Flip Move</a> |
          Posters from <a href="https://www.themoviedb.org/"> themoviedb.org</a> |
          Everything else from <a href="https://trakt.tv/dashboard">trakt.tv</a>
        </p>
      </div>
    );
  }
}

export default FooterContainer;