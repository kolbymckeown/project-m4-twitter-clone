import React from "react";
import Bookmarks from "./Components/Bookmarks";
import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Profile from "./Components/Profile";
import TweetDetails from "./Components/TweetDetails";

const App = () => {
  return (
    <>
      <div>Hello World!</div>
      <Bookmarks />
      <HomeFeed />
      <Notifications />
      <Profile />
      <TweetDetails />
    </>
  );
};

export default App;
