import React from "react";
import styled from 'styled-components'

class HomeFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: null,
    }
  }
  componentDidMount() {
    fetch("/api/me/home-feed")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((newTweets) => {
      console.log(newTweets);
      this.setState({tweets: newTweets});
    });
  }

  loop = () => {
    Object.entries(this.state.tweets.tweetsById).map(([tweet, value]) => {
      console.log(value.status)
      return (<span>{value.status}</span>) 
    })
  };
  render() {

    if (this.state.tweets) {
    var tweetStatuses = Object.entries(this.state.tweets.tweetsById).map(([tweet, value]) => {
    return (<Li>{value.status}, {value.timestamp}</Li>)
    // value.numLikes
    // value.author.avatarSrc
    // value.author.handle
    // value.author.displayName
    // value.author...
    })
  } else {
    return <div>...Loading</div>
  }
  return (
    <Wrap>
      
      <Ul>
      {this.state.tweets && tweetStatuses}
      {/* {this.state.tweets && this.state.tweets.tweetsById["1209788222324256768"].status} */}
      </Ul>
      
    </Wrap>
  );
};
}

export default HomeFeed;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

`;

const Ul = styled.ul`
  margin-left: 25%;
`;

const Li = styled.li`
  margin: 15px 0px 15px 0px;
`;

// GET /api/me/home-feed
