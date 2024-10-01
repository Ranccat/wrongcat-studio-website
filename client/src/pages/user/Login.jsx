import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderNavbar from '../../components/navbar/HeaderNavbar';
import LoginBackImg from '../../assets/backImg/loginBackImg.png';

const LoginDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${LoginBackImg});
  background-size: cover; /* 이미지가 전체를 덮도록 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 */
`;

const LoginComponentDiv = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
`

const TitleP = styled.p`
    margin-top : 15vh;
    width : font-size;
    font-size : 3vw;
    font-family : maplestory Bold;
    background-color: rgba(0, 0, 0, 0.03); /* 검정색을 50% 투명하게 설정 */
    color : white;
`

const InputDiv = styled.div`
    display : flex;
    flex-direction : row;
    align-items: center;
    height : 5vh;
    margin-top : 3vh;
`

const InputP = styled.p`
    font-size : 1.7vw;
    font-family : maplestory Light;
    color : white;
    background-color: rgba(0, 0, 0, 0.03); /* 검정색을 50% 투명하게 설정 */
`

const IdInput = styled.input`
    width : 20vw;
    height : 5vh;
    background-color : rgba(255, 255, 255, 0.8);
    border-radius : 5px;
    border : 1px solid white;
    margin-left : 2vw;
    text-indent : 0.5vw;
`

const PwInput = styled.input`
    width : 20vw;
    height : 5vh;
    background-color : rgba(255, 255, 255, 0.8);
    border-radius : 5px;
    border : 1px solid white;
    margin-left : 1.2vw;
    text-indent : 0.5vw;
`

const LoginBtn = styled.button`
    width : 24.5vw;
    height : 7vh;
    // background-color : rgba(163, 166, 242, 0.8);
    // background-color : rgba(130, 143, 237, 0.8);
    background-color : rgba(130, 154, 237, 0.8);
    // background-color : rgba(139, 142, 238, 0.8);
    border : 1px solid white;
    border-radius : 7px;
    color : white;
    margin-top : 3vh;
    font-size : 1.5vw;
    font-family : pretendard;
`

const Login = () => {

    return(
        <LoginDiv>
            <HeaderNavbar/>
            <LoginComponentDiv>
                <TitleP>
                    Login
                </TitleP>
                <InputDiv>
                    <InputP>ID</InputP>
                    <IdInput type="text"></IdInput>
                </InputDiv>
                <InputDiv>
                    <InputP>PW</InputP>
                    <PwInput type="password"></PwInput>
                </InputDiv>
                <LoginBtn>
                    Login
                </LoginBtn>
            </LoginComponentDiv>
        </LoginDiv>
    )

};

export default Login;