import React,{useState, useEffect} from "react";
import styled from "styled-components";
import '../App.css';

const HomePresenter = () => {
    const [mainMessagePos, setMainMessagePos] = useState(50)
    useEffect(()=> {
        
      },[])
      
      setInterval(()=>{
        const text = document.querySelector('#KVM');
        text.style.transform=`translateX(-${mainMessagePos}%)}%)`;
        setMainMessagePos(mainMessagePos-1);
      },500)
        return (
            <Container>
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
                <KeyvisualSection>
                    <KVMessage id='KVM'>WERO STUDIO</KVMessage>
                </KeyvisualSection>
            </Container>
        )
}
export default HomePresenter;

const Container = styled.div`
    width:100%;
    padding: 0 60px;
`;

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

const KeyvisualSection = styled.div`
    position:relative;
    width:100%;
    height:100vh;
    background-color:#AE00F8;
`;

const KVMessage = styled.div`
    position:absolute;
    top:40%;
    left:50%;
    transform: translateX(-50%) ;
    font-weight:800;
    font-size:8rem;
    color: #FDAD04;
    white-space: nowrap;
`;
