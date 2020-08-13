import React from "react";
import moment from "moment";
import styled from "styled";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";

const SingleTweet = () => {
  return (
    <Wrapper>
      <Head>
        <HeadAvatar>
          <AvatarImg src={tweet.author.avatarSrc} />
        </HeadAvatar>
        <HeadNames>
          <DispName>{tweet.author.displayName}</DispName>{" "}
          <DispHandle>@{tweet.author.handle}</DispHandle> <BsDot />
        </HeadNames>
      </Head>
      <TweetBody>
        <Tweet>{tweet.status}</Tweet>
        <TweetImage src={tweet.media[0]} />
        <Timestamp>
        {moment(tweet.timestamp).format("MMM Do")}
        </Timestamp>
      </TweetBody>
      <TweetFooter>
        <BsChat /> <AiOutlineRetweet /> <AiOutlineHeart /> <AiOutlineUpload />
      </TweetFooter>
    </Wrapper>
  );
};

// QUESTION 

// Outline of clicked on Tweet to expand into the above layout
// Images not loading properly
// If statement to render 500 error?
// How to output tweets put into the textarea?

export default SingleTweet;

const Wrapper = styled.div``;

const Head = styled.div``;

const HeadAvatar = styled.div``;

const AvatarImg = styled.img``;

const HeadNames = styled.div``;

const DispName = styled.p``;

const DispHandle = styled.p``;

const TweetBody = styled.div``;

const Tweet = styled.p``;

const TweetImage = styled.img``;

const Timestamp = styled.p``;

const TweetFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
