import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; /* Add padding for better spacing */
`;

const DropDownContainer = styled.div`
  width: 15em;
  color: #be800d;
`;

const DropDownHeader = styled.div`
  
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 15em;
  color: #be800d;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
`;

const BillingOperations = () => {
  const options = ['Meralco', 'Maynilad', 'PLDT'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const history = useNavigate();

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const navigateToCorrespondingPage = () => {
    if (selectedOption === 'Mangoes') {
      history.push('/mango-page');
    } else if (selectedOption === 'Apples') {
      history.push('/apple-page');
    } else if (selectedOption === 'Oranges') {
      history.push('/orange-page');
    }
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || 'Choose your Billers'}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>  
      <Button onClick={navigateToCorrespondingPage}>Go </Button>
    </Main>
  );
};

export default BillingOperations;
