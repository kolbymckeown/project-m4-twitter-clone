import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useParams } from "react-router-dom";

const TweetDetails = () => {
    const [tweet, setTweet] = React.useState(null)
    const params = useParams();
    React.useEffect(async () => {
    const tweetId = params.tweetId;
    const response = await fetch(`/api/tweet/${tweetId}`);
    const data = await response.json();
    setTweet(data.tweet);
    }, []);
    if (!tweet) {
        return <div>Loading</div>
    } 
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
    // <>
    //     <div>Tweet Details</div>
    // </>
);
}

export default TweetDetails;

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
