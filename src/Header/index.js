import React,{useState, useEffect} from "react";
import styled from "styled-components";


const Header = () => {
    return (
        <Navigation>
            <GlobalNavMenus>
                <NavMenu>STUDIO WERO</NavMenu>
                <NavMenu>About</NavMenu>
                <NavMenu>Service</NavMenu>
                <NavMenu>Works</NavMenu>
                <NavMenu>blog</NavMenu>
                <NavMenu>Contact</NavMenu>
            </GlobalNavMenus>
        </Navigation>
    )
}

export default Header;


const Navigation = styled.nav`
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    width:100%;
    height:70px;
    background-color:white;
`;

const GlobalNavMenus = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; /*flex에서 수직정렬*/
    height: 100%;
    margin: 0 auto;
    padding:0 60px;
`;

const NavMenu = styled.a`
    cursor:pointer;
    &:first-child{
        font-weight:800;
        flex:0.7;
    }
`;
