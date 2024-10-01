import React from 'react';
import styled from 'styled-components';
import HomeBackImg from '../../assets/backImg/mainBackImg.png';
import HeaderNavbar from '../../components/navbar/HeaderNavbar';

const HomeDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${HomeBackImg});
  background-size: cover; /* 이미지가 전체를 덮도록 */
  background-position: center; /* 이미지가 가운데에 위치하도록 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 */
`;

const TitleDiv = styled.div`
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */
`;

const TitleP = styled.p`
    font-size : 3.5vw;
    font-weight : 800;
    margin : 0 0 0 5vw;
    color : white;
    background-color: rgba(0, 0, 0, 0.04); /* 검정색을 50% 투명하게 설정 */
    border-radius : 100px;
`

const ExplainP = styled.p`
    font-size : 2vw;
    font-weight : 200;
    margin : 0 0 0 5vw;
    color : white;
    background-color: rgba(0, 0, 0, 0.04); /* 검정색을 50% 투명하게 설정 */
    border-radius : 100px;
`

const Home = () => {
  return (
    <HomeDiv>
        <HeaderNavbar/>
        <TitleDiv>
            <TitleP>
                Main Page
            </TitleP>
            <ExplainP>
                Welcome to WrongCat Studio
            </ExplainP>
        </TitleDiv>
    </HomeDiv>
  );
};

export default Home;
