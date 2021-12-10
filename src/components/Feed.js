import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessegeSender from "./MessegeSender";
import Post from "./Post";
import db from "./firebase";
function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessegeSender />
      {posts.map((post) => (
        <Post
          key={posts.id}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          username={post.data.username}
          messege={post.data.messege}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
