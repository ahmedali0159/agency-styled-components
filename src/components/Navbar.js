import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline #e55039;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px){
        display: none;
    }

    @media only screen and (max-width: 768px){
    background: #ff6b6b;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
    top: 0;
}
`;
const MenuItems = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    @media only screen and (max-width: 768px){
        color: white;
        margin-top: 20px;
    }
`;

const Button =  styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background: #e55039;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    text-transform: uppercase;
    @media only screen and (max-width: 768px){
        position: relative;
       
        
    }
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        Agency
                    </Logo>
                <Menu>
                    <MenuItems>Home</MenuItems>
                    <MenuItems>Features</MenuItems>
                    <MenuItems>Services</MenuItems>
                    <MenuItems>Pricing</MenuItems>
                    <MenuItems>Contact</MenuItems>
                </Menu>
                </Left>
                <Button>Join Now</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
