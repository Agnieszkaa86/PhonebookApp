import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 18px;
`;

export const Input = styled.input`
  max-width: 300px;
  height: 30px;
  padding: 3px 5px;
  border-radius: 5px;
  border: 2px solid #4abda7;
  font-size: 15px;
  margin-top: 10px;
  transition: all 250ms linear;
  &:active,
  &:focus {
    border: 2px solid teal;
  }
`;

export const Button = styled.button`
  width: 315px;
  height: 38px;
  margin-top: 10px;
  background-color: #4abda7;
  border: 0;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  color: #4abda7;
`;