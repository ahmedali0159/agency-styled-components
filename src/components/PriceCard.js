import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px -3px rgba(50, 50, 50, 0.75);
  @media only screen and (max-width: 480px){
       margin-right: 0;
       margin-bottom: 10px;
       padding: 10px;
    }
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-size: 50px;
    font-weight: bold;
    @media only screen and (max-width: 480px){
       font-size: 30px;
    }
`;
const Type = styled.button`
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #e55039;
    color: #e55039;
    background: white;
    border-radius: 20px;
    @media only screen and (max-width: 480px){
       display: none;
    }
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width: 480px){
       font-size: 12px;
       margin: 10px;
    }
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  background: #546de5;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and (max-width: 480px){
       font-size: 12px;
       padding: 5px;
    }
`;

const PriceCard = ({price, type}) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{price}</Price>/month
      </PriceContainer>
      <Type>{type} Plan</Type>
      <List>
        <ListItem>200 Hand-Crafted Templeted</ListItem>
        <ListItem>Exclusive Support</ListItem>
        <ListItem>50+ Prebuilt Websites</ListItem>
        <ListItem>Premium Plagins</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
