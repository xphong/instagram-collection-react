import React, { Component, PropTypes } from 'react';

import { formatDate } from '../utils/utils';

export default class Media extends Component {
  constructor(props, context){
    super(props, context);
  }

  renderTitle() {
    const media = this.props.media;
    const isDateSpecified = media.getIn(['collection', 'startDate']) && media.getIn(['collection', 'endDate']);

    if (media.get('collection').size <= 0) {
      return;
    }

    return (
      <div className="media-title">
        <h2>#{media.getIn(['collection', 'hashtag'])}</h2>
        <h3>{isDateSpecified ? `${media.getIn(['collection', 'startDate'])} to ${media.getIn(['collection', 'endDate'])}` : ''}</h3>
      </div>
    );
  }

  renderMedia() {
    const mediaData = this.props.media.get('data');
    const error = this.props.media.get('error');

    if (mediaData.size <= 0 || error) {
      return;
    }

    return (
      <div className="media-item-container">
        {mediaData.map(this.renderMediaItem.bind(this))}
      </div>
    );
  }

  renderMediaItem(item, index) {
    const itemDate = formatDate(parseInt(item.created_time) * 1000);

    const displayImage = (
      <a target="_blank" href={item.link}>
        <img className="img-responsive" src={item.images.low_resolution.url} />
        <div className="media-item-hover">
          <p className="media-item-hover-text">{item.user.username}</p>
          <p className="media-item-hover-text">{itemDate}</p>
          <p className="media-item-hover-text">&#x2764; {item.likes.count}</p>
        </div>
      </a>
     );

    const displayVideo = (
      <div>
        <video className="media-item-video" controls width="320" height="320" src={item.videos ? item.videos.low_resolution.url : ''}>
        </video>
        <a target="_blank" href={item.link}>
          <div className="media-item-hover">
            <p className="media-item-hover-text">{item.user.username}</p>
            <p className="media-item-hover-text">{itemDate}</p>
            <p className="media-item-hover-text">&#x2764; {item.likes.count}</p>
          </div>
        </a>
      </div>
    );

    return (
      <div key={index} className="media-item">
        {item.type === 'video' ? displayVideo : displayImage}
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
