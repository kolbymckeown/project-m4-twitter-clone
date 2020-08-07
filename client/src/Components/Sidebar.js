import React from "react";
import logo from "../assets/logo.svg";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { COLORS } from "../constants"
import styled from 'styled-components'
import { RiHome3Line } from "react-icons/ri"
import { MdPerson } from 'react-icons/md'
import { BsBell } from 'react-icons/bs'
import { BsBookmarkFill } from 'react-icons/bs'
import Notifications from './Notifications'

const Sidebar = () => {
  return (
    <Div>
      <img src={logo} />
      <Router>
        <NavigationLink to="/"><RiHome3Line /> Home</NavigationLink>
        <NavigationLink to="/"><MdPerson /> Profile</NavigationLink>
        <NavigationLink to="/notifications"><BsBell /> Notifications</NavigationLink>
        <NavigationLink to="/bookmarks"><BsBookmarkFill /> Bookmarks</NavigationLink>
      </Router>
    </Div>
  );
};

export default Sidebar;

const NavigationLink = styled(NavLink)`
    color: lightcoral;

    &.active {
        color: ${COLORS.primary}
    }

`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

// QUESTIONS
// NavLinks changing browers info but not rerendering?
// Active components not working properly
