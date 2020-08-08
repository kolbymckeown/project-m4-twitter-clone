import React from "react";
import logo from "../assets/logo.svg";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { COLORS } from "../constants";
import styled from "styled-components";
import { RiHome3Line } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import Notifications from "./Notifications";

const Sidebar = () => {
  return (
    <Wrapper>
      <ImgWrap>
      <img src={logo} />
      </ImgWrap>
      <Div>
      <NavigationLink exact to="/">
        <RiHome3Line /> Home
      </NavigationLink>
      <NavigationLink to="/person/abc">
        <MdPerson /> Profile
      </NavigationLink>
      <NavigationLink to="/notifications">
        <BsBell /> Notifications
      </NavigationLink>
      <NavigationLink to="/bookmarks">
        <BsBookmarkFill /> Bookmarks
      </NavigationLink>
      </Div>
    </Wrapper>
  );
};

export default Sidebar;

const NavigationLink = styled(NavLink)`
  color: lightcoral;
  font-size: 25px;
  width: 245px;
  height: 50px;
  padding-top: 15px;
  margin: 10px 0 10px 0;
  text-decoration: none;

  &.active {
    color: ghostwhite;
    background: rgb(0, 0, 255, 0.4);
    border-radius: 15px;
  }
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  width: 25%;
  height: 100vh;
  padding-left: 50px;
  border-right: 1px solid lightcoral;
  align-items: center;
`;

const ImgWrap = styled.div`
  text-align: center;
  padding-bottom: 15px;
`;

const Div = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

// QUESTIONS
// NavLinks changing browers info but not rerendering?
// Active components not working properly
