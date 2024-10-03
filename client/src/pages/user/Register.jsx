import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderNavbar from '../../components/navbar/HeaderNavbar';
import LoginBackImg from '../../assets/backImg/loginBackImg.png';

const RegisterDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${LoginBackImg});
  background-size: cover; /* 이미지가 전체를 덮도록 */
  background-repeat: no-repeat; /* 이미지가 반복되지 않도록 */

`;

const Register = () => {

    return(
        <RegisterDiv>
            <HeaderNavbar/>
        </RegisterDiv>
    )

};

export default Register;