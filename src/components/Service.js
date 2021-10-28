import React from "react";
import styled from "styled-components";
import girl2 from "../images/gitl on laptop_prev_ui.png";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-left: 100px;
`;
const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

const Title = styled.h1``;
const Desc = styled.p``;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={girl2} />
      </Left>
      <Right>
        <Wrapper>
          <Title>A Simple Process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magnam
            non facilis cumque consectetur provident veniam vel, maxime numquam
            ut placeat sapiente id facere harum similique soluta cum iste
            tempore.
          </Desc>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
