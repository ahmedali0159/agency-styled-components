import React from "react";
import styled from "styled-components";
import girl from "../images/girl1_prev_ui.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px){
        flex-direction: column;
    }
    @media only screen and (max-width: 768px){
        flex-direction: column;
    }
`;
const Left = styled.div`
  width: 60%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px){
      width: 100%;
      height: 100%;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`;


const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 50px;
    }
    @media only screen and (max-width: 768px){
        width: 100%;
        font-size: 60px;
        text-align: center;
        /* transform: translate(10px, 100%); */
    }
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 10px;
  @media only screen and (max-width: 480px){
        width: 100%;
    }
`;

const Info = styled.div`
    width: 60%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button`
    padding: 15px;
    background: #546de5;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
        margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone = styled.span`
    color: #f3a683;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px){
        display: none;
    }
    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
   
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis
          qui magnam quae eveniet cum velit enim quibusdam repudiandae voluptas?
        </Description>
        <Info>
            <Button>Start A Project</Button>
            <Contact>
                <Phone>
                    Call Us -880245547415
                </Phone>
                <ContactText>For any question or concern</ContactText>
            </Contact>
        </Info>
      </Left>
      <Right>
          <Image src={girl} />
      </Right>
      <AnimatedShape />
    </Container>
  );
};

export default Intro;
