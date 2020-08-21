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
  const [tweet, setTweet] = React.useState(null);
  const [isClick, setClick] = useState(false);
  const params = useParams();
  React.useEffect(() => {
    const tweetId = params.tweetId;
    fetch(`/api/tweet/${tweetId}`)
    .then(response => response.json())
    .then(data => setTweet(data.tweet))
    
    return () => {}
  }, []);
  if (!tweet) {
    return <div>Loading</div>;
  }
  return (
    <Wrapper>
      <Head>
        <HeadAvatar>
          <div>
          <AvatarImg src={tweet.author.avatarSrc} />
          </div>
          <HeadNames>
            <DispName>{tweet.author.displayName}</DispName>{" "}
            <DispHandle>@{tweet.author.handle}</DispHandle>
          </HeadNames>
        </HeadAvatar>
      </Head>
      <TweetBody>
        <Tweet>{tweet.status}</Tweet>
        {tweet.media[0] && <TweetImage src={tweet.media[0].url} />}

        <Timestamp>{moment(tweet.timestamp).format("MMM Do")}</Timestamp>
      </TweetBody>
      <TweetFooter>
        <BsChat /> <AiOutlineRetweet /> <AiOutlineHeart /> <AiOutlineUpload />
      </TweetFooter>
    </Wrapper>
    // <>
    //     <div>Tweet Details</div>
    // </>
  );
};

export default TweetDetails;

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;

const Head = styled.div``;

const HeadAvatar = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarImg = styled.img`
  height: 75px;
  border-radius: 50%;
`;

const HeadNames = styled.div`
  margin-left: 20px;
`;

const DispName = styled.p`
  color: black;
  font-size: 25px;
`;

const DispHandle = styled.p`
  color: grey;
  font-size: 18px;
`;

const TweetBody = styled.div``;

const Tweet = styled.p`
  color: black;
  font-size: 28px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const TweetImage = styled.img`
  height: 350px;
  border-radius: 15px;
`;

const Timestamp = styled.p`
  color: grey;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const TweetFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
