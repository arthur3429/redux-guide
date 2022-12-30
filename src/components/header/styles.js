import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #111;
  display: flex;
  justify-content: center;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  .header-wrapper {
    width: 100%;
    max-width: 1290px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 22px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }

    &:nth-child(1) {
      margin-right: 40px;
    }
  }
`;
