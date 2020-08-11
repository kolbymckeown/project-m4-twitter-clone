import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

import { CurrentUserContext } from "./CurrentUserContext";
import { GoLocation } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";

const Profile = () => {
  const { profile } = React.useContext(CurrentUserContext);

  return (
    <Wrapper>
      {profile ? (
        <div>
          {console.log(profile)}
          <ImageDiv>
            <BannerImg src={profile.bannerSrc} />
            <AvatarImg src={profile.avatarSrc} />
          </ImageDiv>
          <BodyDiv>
            <ProfileName>{profile.displayName}</ProfileName>
            <ProfileHandle>@{profile.handle}</ProfileHandle>

            <Bio>{profile.bio}</Bio>
            <div>
              <Location>
                <GoLocation /> {profile.location}&ensp;&ensp;
                <FaRegCalendarAlt /> {profile.joined}
              </Location>
            </div>
            <div>
              <Follow>
                {profile.numFollowing} Following&ensp;&ensp;
                {profile.numFollowers} Followers
              </Follow>
            </div>
          </BodyDiv>
          <Nav>
            <Button>Tweets</Button>
            <Button>Media</Button>
            <Button>Likes</Button>
          </Nav>
          {/* Users Tweets */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

export default Profile;

const ImageDiv = styled.div`
  position: relative;
`;

const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 25px;
  position: relative;
  top: 350px;
`;

const BodyDiv = styled.div`
  position: relative;
  top: 350px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  top: 350px;
  margin-top: 15px;
`;

const Button = styled.a`
  background-color: white;
  border: none;
  font-size: 20px;
  color: ${COLORS.primary};

  &:hover {
    cursor: pointer;
  }

  &.active {
    border: none;
  }
`;

const Wrapper = styled.div`
  line-height: 1.5;
`;

const Location = styled.span`
  color: grey;
`;

const Follow = styled.span`
  color: grey;
`;

const ProfileName = styled.p`
  font-weight: bold;
  color: black;
  font-size: 1.5rem;
`;

const ProfileHandle = styled.p`
  color: grey;
`;

const Bio = styled.span`
  color: black;
`;

// isBeingFollowedByYou: false
// isFollowingYou: false
// numLikes: 1
