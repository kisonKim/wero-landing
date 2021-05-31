import React,{useState, useEffect} from "react";
import styled from "styled-components";
import '../App.css';
import Header from "../Header/index"
const HomePresenter = () => {
    
  const useScroll = () => {
    const [state, setState] = useState({
      x: 0, // x와 y의 초기값을 0으로 지정
      y: 0
    });
    const onScroll = () => {
      // var filter = "win16|win32|win64|macintel|mac|"; // PC일 경우 가능한 값
      // if( navigator.platform) {
      //   if( filter.indexOf(navigator.platform.toLowerCase())<0 ) {
      //     if(document.querySelector(ContactWrapper).getBoundingClientRect().top<100) {
      //       document.querySelector(BridgeButtonWrapper).style.display='none'
      //     }else{
      //       document.querySelector(BridgeButtonWrapper).style.display='block'
      //     }
      //   }
      // }
      // setState({ x: window.scrollX, y: window.scrollY });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
      return () => window.removeEventListener("scroll", onScroll); // clean up
    }, []);
    return state;
  };
      
  const { y } = useScroll();

    return (
        <Container>
            <Header/>
            <KeyvisualSection>
                <KeyvisualWrapper>
                  <KVMessage id='KVM'>
                    <marquee scrollamount={10}>WERO STUDIO WERO STUDIO WERO STUDIO</marquee>
                  </KVMessage>
                </KeyvisualWrapper>
            </KeyvisualSection>
            <InfoSection>

            </InfoSection>
        </Container>
    )
}
export default HomePresenter;

const Container = styled.div`
  width:100%;
`;

const KeyvisualSection = styled.div`
  position:relative;
  padding: 0 60px;
  
`;

const KeyvisualWrapper = styled.div`
  position: relative;
  height:100vh;
  background-color:#AE00F8;
  overflow-x:hidden;
`;

const KVMessage = styled.div`
  position:absolute;
  top:40%;
  left:50%;
  transform: translateX(-50%) ;
  font-weight:800;
  font-size:9rem;
  color: #FDAD04;
  white-space: pre;
  width:100%;
  marquee{
    width:100%;
  }
`;

const InfoSection = styled.div`
  height:100vh;
`;