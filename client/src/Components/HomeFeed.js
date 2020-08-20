import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";
import Feed from './Feed'


class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
      body: "",
      user: {},
    };
  }
  
  newTweet = () => {
    
  // const { params } = useParams();
  // const tweetId = params.tweetId;
  // const tweetRoute = `/tweet/tweetId`

    const postTweet = { status: this.state.body };
    fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postTweet),
    })
      .then((response) => response.json())
      .then((data) => {
        const tweetIds = this.state.tweets.tweetIds;
        const tweetsById = this.state.tweets.tweetsById;
        tweetsById[data.tweet.id] = { ...data.tweet, author: this.state.user };
        tweetIds.unshift(data.tweet.id);
        // console.log(this.state.tweets.tweetIds)
        this.setState({ tweets: { tweetIds, tweetsById } });
        // console.log(data);
        /* Update TweetById and TweetIds with new Data */
        // console.log(this.state.tweets)
        // this.setState({
        //   tweets: { tweetIds: [data.tweet.id, ...this.state.tweets.tweetIds] },
        // });
      })

      .catch((error) => {
        console.log(error);
      });
  };

   

  handleBodyChange = (e) => {
    this.setState({ body: e.target.value });
  };

  componentDidMount() {
    fetch("/api/me/home-feed")
      .then((res) => {
        return res.json();
      })
      .then((newTweets) => {
        // console.log(newTweets.tweetsById['1209791721099411456r1']);
        this.setState({
          tweets: newTweets,
          user:
            newTweets.tweetsById[Object.keys(newTweets.tweetsById)[0]].author,
        });
      });
  }

  loop = () => {
    Object.entries(this.state.tweets.tweetsById).map(([tweet, value]) => {
      // console.log(value.status);
      return <span>{value.status}</span>;
    });
  };


  render() {
    console.log(this.state);

    if (!this.state.tweets) {
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
          <TweetInput
            value={this.state.body}
            onChange={this.handleBodyChange}
            placeholder="Meow!"
          ></TweetInput>
          <Submit onClick={this.newTweet}>Meow!</Submit>
          {/* PUT to same tweets UL */}
        </TweetArea>
        <Ul>
          <Feed tweets={this.state.tweets.tweetsById} />
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



const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;



const Load = styled.iframe`
  position: absolute;
  top: 20%;
  left: 45%;
`;

const Ul = styled.ul`
  margin-left: 25%;
`;


// GET /api/me/home-feed
