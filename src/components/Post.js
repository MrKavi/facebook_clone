import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
function Post({ profilePic, image, username, timestamp, messege }) {
  return (
    <div className="post">
      <div className="top">
        <Avatar scr={profilePic} className="avtar" />
        <div className="topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="p-bottom">
        <p>{messege}</p>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>

      <div className="p_options">
        <div className="option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
