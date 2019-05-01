import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: #000;
  margin-bottom: 3px;
`;

export const Title = styled.span`
  font-family: Roboto;
  color: #ccc;
  font-weight: bold;
`;

export const Button = styled.button`
  font-family: Roboto;
  box-sizing: border-box;
  padding: 2px 10px;
  border-radius: 3px;
  background-color: ${props => (props.btnDelete ? "red" : "#141414")};
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  border: none;
  outline-color: #ccc;
  margin-left: 5px;
  text-transform: uppercase;
`;
