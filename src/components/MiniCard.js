import React from "react";
import styled from "styled-components";
import search from "../images/search.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  @media only screen and (max-width: 480px){
        width: 50px;
    }
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;
    @media only screen and (max-width: 480px){
       font-size: 14px;
    }
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={search} />
      <Text>Lorem, ipsum dolor sit amet consectetur</Text>
    </Container>
  );
};

export default MiniCard;
