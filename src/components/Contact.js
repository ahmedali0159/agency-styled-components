import React from 'react'
import styled from 'styled-components'
import map from "../images/map.png"
import phone from "../images/phone.png"
import send from "../images/send.png"

const Container = styled.div`
    height: 90%;
`;

const Wrapper = styled.div`
    height: 100%;
    padding:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
       flex-direction: column;
    }
`;
const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px){
       width: 100%;
    }
`;

const Title = styled.h1`
    margin: 70px;
    margin-top: 0;
    @media only screen and (max-width: 480px){
       margin: 20px;
    }
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
       flex-direction: column;
    }
`;

const LeftForm = styled.div`
    margin-right: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
      height: 50%;
      margin-right: 0;
    }
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 480px){
      height: 50%;
    }
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 480px){
      padding: 5px;
    }
`;

const Textarea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px){
      padding: 5px;
      margin-top: 20px;
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
  margin-top: 20px;
  text-transform: uppercase;
  cursor: pointer;
  @media only screen and (max-width: 480px){
      padding: 5px;
      font-size: 12px;
    }
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 480px){
     width: 100%;
     margin-top: 20px;
    }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 480px){
      margin-bottom: 20px;
    }
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
     width: 15px;
    }
`;
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    @media only screen and (max-width: 480px){
      font-size: 14px;
    }
`;

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Question? <br/>Let's get in touch </Title>
                    <Form>
                    <LeftForm>
                        <Input placeholder="Your Name" />
                        <Input placeholder="Your Email" />
                        <Input placeholder="Your Subject" />
                    </LeftForm>
                    <RightForm>
                        <Textarea placeholder="Your Message" />
                        <Button>Send</Button>
                    </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={map}/>
                        <Text>123 Park Avenue st, New York USA</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={phone}/>
                        <Text>+880147441444</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={send}/>
                        <Text>ahmedali@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
