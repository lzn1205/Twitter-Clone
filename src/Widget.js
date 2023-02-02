import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

export default function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId="858551177860055040" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.instagram.com/ndl.125.kr/"}
          options={{
            text: "#reactjs Thank you Clever Programmer for helping me building this clone",
            via: "longnguyen",
          }}
        />
      </div>
    </div>
  );
}
