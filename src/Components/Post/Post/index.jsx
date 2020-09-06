import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostHeader from 'Components/Post/PostHeader';
import PostFooter from 'Components/Post/PostFooter';

const defaultProps = {
  hoverIcon: null,
  headerPosition: 'bottom',
};
const propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string,
    }),
    User: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    is_public: PropTypes.bool.isRequired,
    created_at: PropTypes.string,
  }).isRequired,
  hoverIcon: PropTypes.element,
  headerPosition: PropTypes.string,
};
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { post, hoverIcon, headerPosition } = this.props;
    return (
      <div className="post">
        <div className="post__hover">{hoverIcon}</div>
        <PostHeader title={post.title} background position={headerPosition} />

        <div className="post__body">
          <div className="post__body__image">
            <img src={post.Image.path} alt="artwork" />
          </div>
        </div>
        <PostFooter />
      </div>
    );
  }
}

Post.defaultProps = defaultProps;
Post.propTypes = propTypes;

export default Post;
