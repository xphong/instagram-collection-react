import React, { Component, PropTypes } from 'react';

export default class Media extends Component {
  constructor(props, context){
    super(props, context);
  }

  renderMediaItem(item, index) {
    return (
      <div key={index} className="media-item">
        <img className="img-responsive" src={item.getIn(['images', 'low_resolution', 'url'])} />
      </div>
    );
  }

  render() {
    return (
      <div className="media-container">
        <h2>View</h2>
        <div className="media-item-container">
          {this.props.media.get('data').size > 0 ? this.props.media.get('data').map(this.renderMediaItem) : ''}
        </div>
      </div>
    )
  }
};

Media.propTypes = {
  media: PropTypes.object.isRequired
};
