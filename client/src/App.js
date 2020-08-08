import React from "react";
import Bookmarks from "./Components/Bookmarks";
import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Profile from "./Components/Profile";
import TweetDetails from "./Components/TweetDetails";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { COLORS } from "../src/constants";
import { createGlobalStyle } from "styled-components";
import Sidebar from "./Components/Sidebar";
import CurrentUserProvider from "./Components/CurrentUserContext";

const App = () => {
  console.log("test");
  return (
    <CurrentUserProvider>
      <Wrapper>
        <GlobalStyle />
        <Router>
          <Sidebar />
          <Div>
            <Switch>
              <Route exact path="/">
                <HomeFeed />
              </Route>
              <Route path="/notifications">
                <Notifications />
              </Route>
              <Route path="/bookmarks">
                <Bookmarks />
              </Route>
              <Route path="/tweet/:tweetId">
                <TweetDetails />
              </Route>
              <Route path="/:profileId">
                <Profile />
              </Route>
            </Switch>
          </Div>
        </Router>
      </Wrapper>
    </CurrentUserProvider>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
`;

const Div = styled.div`
  margin: 15px 0 0 15px;
`;

const GlobalStyle = createGlobalStyle`
/* Primary color set in constants.js */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: sans-serif;
    color: ${COLORS.primary};


  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
