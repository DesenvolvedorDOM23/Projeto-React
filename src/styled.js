import styled from "styled-components";

export const AppContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`;
export const InputsContainer = styled.div`
  display: flex;
`;

export const NameInput = styled.input`
  width: 100px;
`;
export const MessageInput = styled.input`
  flex-grow: 1;
`;
