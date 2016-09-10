import React, { Component, PropTypes } from 'react';

export default class Media extends Component {
  constructor(props, context){
    super(props, context);
  }

  renderTitle() {
    if (this.props.media.get('collection').size <= 0) {
      return;
    }

    return (
      <div className="media-title">
        <h2>#{this.props.media.getIn(['collection', 'hashtag'])}</h2>
      </div>
    );
  }

  renderMedia() {
    if (this.props.media.get('data').size <= 0) {
      return;
    }

    return (
      <div className="media-item-container">
        {this.props.media.get('data').map(this.renderMediaItem.bind(this))}
      </div>
    );
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
        {this.renderTitle()}
        {this.renderMedia()}
      </div>
    )
  }
};

Media.propTypes = {
  media: PropTypes.object.isRequired
};
