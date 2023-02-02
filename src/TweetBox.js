import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Long Nguyen",
      username: "lzn1205",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://cdn.24.co.za/files/Cms/General/d/2451/bd15bcdc9bcd43f29bcf13f7b4425c46.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
          {/* <input placeholder="Enter image URL" type="text" /> */}
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox__imageinput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetbox__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}
