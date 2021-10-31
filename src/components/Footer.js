import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 10%;
    background: #2d3436;
    color: lightgray;
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
     padding: 10px;
    }
`;
const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
`;
const ListItem = styled.li`
    margin-right: 20px;
    @media only screen and (max-width: 480px){
      margin-right: 10px;
      font-size: 14px;
    }
`;
const Copyright = styled.span`
     @media only screen and (max-width: 480px){
      font-size: 14px;
    }
`;

export const Footer = () => {
    return (
       <Container>
           <Wrapper>
               <List>
                   <ListItem>Guide</ListItem>
                   <ListItem>Support</ListItem>
                   <ListItem>Api</ListItem>
                   <ListItem>Community</ListItem>
               </List>
               <Copyright>Agency</Copyright>
           </Wrapper>
       </Container>
    )
}
