import React, { useState } from "react";
import styled from "styled-components";
import girl2 from "../images/gitl on laptop_prev_ui.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  display: ${props => props.isOpen && "none"};
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

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 15px 20px;
  background: #546de5;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 50px;
  cursor: pointer;
`;

const Video = styled.video`
  display: ${props => !props.isOpen && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Image isOpen={isOpen} src={girl2} />
        <Video isOpen={isOpen} autoPlay loop controls src="https://youtu.be/w9fKDxmQAWo"/>
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
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setIsOpen(true)}>How it Works</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Service;
