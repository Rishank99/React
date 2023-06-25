import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Nav";
const Header = () => {
  return <MainHeader>
    <NavLink to="/">
        <img src="https://as1.ftcdn.net/v2/jpg/02/45/84/16/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="wait"  className="imglogo"/>
    </NavLink>
    <Nav/>
  </MainHeader>;
};

const MainHeader = styled.header` 
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.imglogo{
 height: 8rem;
 margin-left: 60px;
}

`;


export default Header;