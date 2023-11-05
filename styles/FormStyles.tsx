// styles/FormStyles.tsx
import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
`;

export const Select = styled.select`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin-right: 10px; 

  &:hover {
    background-color: #0056b3;
  }
`;

export const CancelButton = styled(Button)`
  background-color: red; 
  margin-right: 0;
`;
