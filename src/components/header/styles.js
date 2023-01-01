import styled from "styled-components";

export const HeaderPlaceholder = styled.div`
  height: 100px;
  width: 100%;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  background: rgba(246, 246, 248, 0.9);
  box-shadow: 0 0 15px rgb(0 0 0 / 10);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #151515;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

  .header-wrapper {
    width: 100%;
    max-width: 1290px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  img {
    max-width: 120px;
  }
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
