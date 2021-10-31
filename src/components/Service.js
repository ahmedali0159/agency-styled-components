import React, { useState } from "react";
import styled from "styled-components";
import girl2 from "../images/gitl on laptop_prev_ui.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px){
        flex-direction: column;
    }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px){
        display: none;
    }
`;

const Image = styled.img`
  display: ${props => props.isOpen && "none"};
  height: 100%;
  margin-left: 100px;
`;
const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  @media only screen and (max-width: 480px){
        padding: 20px;
    }
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
  @media only screen and (max-width: 480px){
       width: 100%;
    }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  padding: 5px;
  background: white;
  border: none;
  border-bottom: 5px;
  right: 5px;
  top: 30%;
`;

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
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
      {smallScreen && isOpen && (
        <Modal>
          <Video isOpen={isOpen} autoPlay loop controls src="https://youtu.be/w9fKDxmQAWo"/>
          <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
        </Modal>
       
      )}
    </Container>
  );
};

export default Service;
