import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import moment from "moment";
import Feed from './Feed';  

import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";

const SpecificProfile = () => {
  const [profile, setProfile] = React.useState(null);
  const [userTweets, setUserTweets] = React.useState(null);
  const params = useParams();
  console.log(params);
  React.useEffect(() => {
    fetch(`/api/${params.profileId}/profile`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((handleProfile) => {
        setProfile(handleProfile.profile);
      });
  }, []);

  React.useEffect(() => {
    fetch(`/api/${params.profileId}/feed`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((handleUserTweet) => {
      setUserTweets(handleUserTweet)
    })
  }, [])
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
                <FaRegCalendarAlt /> {moment(profile.joined).format('MMM Do YYYY')}
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
          {userTweets ? (<Feed tweets={userTweets.tweetsById}/>) : (<div>Loading</div>)}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Wrapper>
  );
};

export default SpecificProfile;

const ImageDiv = styled.div`
  position: relative;
`;

const BannerImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 400px;
  width: 100%;
  border-radius: 15px;
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 25px;
  position: relative;
  top: 350px;
  height: 150px;
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
