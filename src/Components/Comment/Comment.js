import React, { Component } from "react";

import { Thumbnail, MainTextField } from "../../Components";

import moment from "moment";
import "animate.css";

import SendIcon from '@material-ui/icons/Send';
import { purple } from "@material-ui/core/colors";

const defaultProps = {};
const propTypes = {};

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="comment">
        <div className="comment__body">
          {comments
            ? comments.map(comment => {
              return (
                <div
                  className="comment__body__item"
                  key={comment.id}
                >
                  <div className="comment__body__item__thumb">
                    <Thumbnail size={50} />
                  </div>
                  <div className="comment__body__item__content">
                    <span className="comment__body__item__content-moment">
                      {moment(comment.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </span>
                    <span>{comment.content}</span>
                  </div>
                </div>
              )
            })
            : (
              <div className="comment__body__none">
                <p>No Comments yet!</p>
              </div>
            )}
        </div>
        <div className="comment__footer">
          <div className="comment__footer__postComment">
            <MainTextField
              placeholder="Enter a comment."
              width="100%"
              rowsMax={1}
              icon={<SendIcon style={{ color: purple[700] }} />}
              onClick={this.handlePostComment}
              onKeyPress={this.handleEnter}
            />
          </div>
        </div>
      </div>
    );
  }

  handlePostComment = () => {
    console.log("handle Post Comment");
  };

  handleEnter = e => {
    if (!(e.key === 'Enter' && e.shiftKey) && (e.key === "Enter")) {
      this.handlePostComment();
    }
  };
}

Comment.defaultProps = defaultProps;
Comment.propTypes = propTypes;

export default Comment;