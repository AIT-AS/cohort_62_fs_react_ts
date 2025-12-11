import styled from "@emotion/styled";

interface ButtonComponentStyles {
  $isRed: boolean;
}

export const PageWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
  background-color: ${({ $isRed }) =>
    $isRed ? "rgba(232, 13, 13, 1)" : " rgb(82, 82, 241)"};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer
`;


export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;

  :hover {
    background-color: rgb(104, 104, 233);
  }
`;

export const ButtonControl = styled.div`
  width: 300px;
`;
