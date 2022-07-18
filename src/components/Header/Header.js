import React from 'react'
import styled from "styled-components";

const ContanierDiv = styled.div`
background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  color: #9b5450;
  font-size: 25px;
  justify-content: center;
  align-items: center;
`;

const Header = () => {

  return (
    <ContanierDiv >
        <h1 style={{textAlign:'center'}}>Recipe App</h1>
    </ContanierDiv>
  )
}

export default Header