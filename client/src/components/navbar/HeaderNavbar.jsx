import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EnttireDiv = styled.div`
    width : 100%;
`;

const HeaderDiv = styled.div`
    padding : 0.8vw 5vw 0;
    color : white;
    font-size : 1.5vw;
    font-weight : 200;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

const PageDiv = styled.div`
    display : flex;
    flex-direction : row;
`

const UserDiv = styled.div`
    display : flex;
    flex-direction : row;
    gap : 5vw;
`

const PageP = styled.p`
    margin-right : 10vw;
    background-color: rgba(0, 0, 0, 0.02); /* 검정색을 50% 투명하게 설정 */
    border-radius : 100px;
`

const UserP = styled.p`
    background-color: rgba(0, 0, 0, 0.02); /* 검정색을 50% 투명하게 설정 */
    border-radius : 100px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* 기존 색상을 유지 */
`;

const HeaderNavbar = () =>  {

    return (
        <EnttireDiv>
            <HeaderDiv>
                <PageDiv>
                    <StyledLink to="/">
                        <PageP>Home</PageP>
                    </StyledLink>
                    <StyledLink to="/about">
                        <PageP>About</PageP>
                    </StyledLink>
                    <StyledLink to="/games">
                        <PageP>Games</PageP>
                    </StyledLink>
                </PageDiv>
                <UserDiv>
                    <StyledLink to="/register">
                        <UserP>Sign up</UserP>
                    </StyledLink>
                    <StyledLink to="/login">
                        <UserP>Login</UserP>
                    </StyledLink>
                </UserDiv>
            </HeaderDiv>
        </EnttireDiv>  
    );

}

export default HeaderNavbar;