import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";


const Feed = ({tweets}) => {
    return Object.entries(tweets)
    .reverse()
    .map(([tweet, value]) => {
      console.log(value);
      const profileId = value.author.handle;
      return (
        <Link to={`/tweet/${tweet}`} style={{ textDecoration: 'none' }}>
          <Li>
            <div>
              <Top>
                <div>
                  <AvatarImg src={value.author.avatarSrc} />
                </div>
                {/* Links to specific Profiles */}
                <Link to={`/${profileId}`} style={{ textDecoration: 'none' }}>
                <UserInfo>
                  <DispName>{value.author.displayName}</DispName>{" "}
                  <DispHandle>@{value.author.handle}</DispHandle> <BsDot />
                  <DispTime>
                    {moment(value.timestamp).format("MMM Do")}
                  </DispTime>
                </UserInfo>
                </Link>
              </Top>
              <TweetDetails>
                {value.status}
                <div styled={{ marginLeft: "50px" }}>
                  {value.media[0] && (
                    <TweetImage src={value.media[0].url} />
                  )}
                </div>
                <TweetFooter>
                  <BsChat /> <AiOutlineRetweet /> <AiOutlineHeart />{" "}
                  <AiOutlineUpload />
                </TweetFooter>
              </TweetDetails>
            </div>
          </Li>
        </Link>
      );
    });
}


export default Feed;

const TweetImage = styled.img`
  height: 225px;
  margin-top: 5px;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  color: grey;
  margin-left: 10px;
`;

const TweetDetails = styled.div`
  color: black;
  margin-top: 10px;
`;

const TweetFooter = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DispName = styled.span`
  font-weight: bold;
  color: black;
`;

const DispHandle = styled.span`
  color: grey;
`;

const DispTime = styled.span`
  color: grey;
`;

const Top = styled.div`
  display: flex;
  align-content: center;
`;

const AvatarImg = styled.img`
  height: 50px;
  border-radius: 50%;
`;

const Li = styled.li`
  margin: 15px 0px 50px 0px;
`;
