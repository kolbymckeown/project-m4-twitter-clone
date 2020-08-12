import React from "react";
import styled from "styled-components";
import moment from "moment";
import { BsDot } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { COLORS } from '../constants';
class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
    };
  }
  componentDidMount() {
    fetch("/api/me/home-feed")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((newTweets) => {
        console.log(newTweets);
        this.setState({ tweets: newTweets });
      });
  }

  loop = () => {
    Object.entries(this.state.tweets.tweetsById).map(([tweet, value]) => {
      console.log(value.status);
      return <span>{value.status}</span>;
    });
  };
  render() {
    if (this.state.tweets) {
      var tweetStatuses = Object.entries(this.state.tweets.tweetsById).map(
        ([tweet, value]) => {
          const image = value.media[0];
          console.log(value);
          return (
            <Li>
              <div>
                <Top>
                  <div>
                    <AvatarImg src={value.author.avatarSrc} />
                  </div>
                  <UserInfo>
                    <DispName>{value.author.displayName}</DispName>{" "}
                    <DispHandle>@{value.author.handle}</DispHandle> <BsDot />
                    <DispTime>
                      {moment(value.timestamp).format("MMM Do")}
                    </DispTime>
                  </UserInfo>
                </Top>
                <TweetDetails>
                  {value.status} <img src={value.media[0] /* <img src={value.media[0].url} /> */} />
                  {/* Get IMG to render?... */}
                  <TweetFooter>
                    <BsChat /> <AiOutlineRetweet /> <AiOutlineHeart />{" "}
                    <AiOutlineUpload />
                  </TweetFooter>
                </TweetDetails>
              </div>
            </Li>
          );
          // value.numLikes
          // value.author.avatarSrc
          // value.author.handle
          // value.author.displayName
          // value.author...
        }
      );
    } else {
      return (
        <div>
          <Load
            src="https://giphy.com/embed/WiIuC6fAOoXD2"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></Load>
        </div>
      );
    }
    return (
      <Wrap>
        <TweetArea>
          <TweetInput placeholder="Meow!"></TweetInput>
          <Submit>Meow!</Submit>
        </TweetArea>
        <Ul>
          {this.state.tweets && tweetStatuses}
          {/* {this.state.tweets && this.state.tweets.tweetsById["1209788222324256768"].status} */}
        </Ul>
      </Wrap>
    );
  }
}

export default HomeFeed;

const TweetArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 25px;
`;

const TweetInput = styled.textarea`
  width: 75%;
  height: 75px;
  margin-left: 25%;
  resize: none;
  font-family: Arial, Helvetica, sans-serif;
`;

const Submit = styled.button`
  color: white;
  background-color: ${COLORS.primary};
  width: 75px;
  height: 45px;
  border-radius: 5px;
  margin-left: 5px;
`;

const UserInfo = styled.div`
  color: grey;
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

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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

const Load = styled.iframe`
  position: absolute;
  top: 20%;
  left: 45%;
`;

const Ul = styled.ul`
  margin-left: 25%;
`;

const Li = styled.li`
  margin: 15px 0px 50px 0px;
`;

// GET /api/me/home-feed
