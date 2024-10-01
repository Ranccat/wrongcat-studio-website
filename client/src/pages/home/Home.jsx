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
    width : 35vw;
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 왼쪽 정렬 */

    &:hover p {
    transform: scale(1.1); /* 10% 확대 */
    transition: transform 0.5s ease-in-out; /* 확대 속도 조정 */
    }
`;

const TitleP = styled.p`
    font-size : 3.5vw;
    font-weight : 800;
    margin : 0 0 0 5vw;
    color : white;
    border-radius : 100px;
`

const ExplainP = styled.p`
    font-size : 2vw;
    font-weight : 200;
    margin : 0 0 0 5vw;
    color : white;
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
