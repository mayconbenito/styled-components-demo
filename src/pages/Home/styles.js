import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  height: 600px;
  padding: 10px;
  background-color: #141414;
  border-radius: 3px;
`;

export const InputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.span`
  font-family: Roboto;
  font-size: 12px;
  color: #ccc;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  background-color: #000;
  font-family: Roboto;
  border: none;
  outline-color: #ccc;
`;

export const Button = styled.button`
  box-sizing: border-box;
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #000;
  height: 30px;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  cursor: pointer;
  border: none;
  outline-color: #ccc;
  text-transform: uppercase;
`;
