import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderNavbar from '../../components/navbar/HeaderNavbar';
import GameBackImg from '../../assets/backImg/gameBackImg.png';

const GameDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${GameBackImg});
  background-size: cover; /* 이미지가 전체를 덮도록 */
  background-position: center; /* 이미지가 가운데에 위치하도록 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 */
`;

const Games = () => {

    return(
        <GameDiv>
            <HeaderNavbar/>
        </GameDiv>
    )

};

export default Games;