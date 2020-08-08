import React from "react";
import Sidebar from "./Sidebar";
import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  const { profile } = React.useContext(CurrentUserContext);
  return (
    <>
      {profile ? (
        <div>
          {console.log(profile)}
          {profile.bio}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default HomeFeed;
