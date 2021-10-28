import React from "react";
import styled from "styled-components";
import phone from "../images/phone3_prev_ui.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 60px;
`;
const Subtitle = styled.span`
  margin-top: 20px;
  font-size: 24px;
  font-style: italic;
  color: #333;
`;
const Description = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background: #546de5;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  margin-top: 10px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={phone} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design<br />
          <b>Good</b> Business
        </Title>
        <Subtitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, exercitationem!
        </Subtitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde modi
          quisquam soluta minus ducimus harum consectetur hic, ipsum eveniet
          commodi deserunt itaque saepe nostrum voluptate.
        </Description>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Feature;
