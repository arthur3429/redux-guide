import styled from "styled-components";

export const HeaderPlaceholder = styled.div`
  height: 100px;
  width: 100%;

  @media (max-width: 1324px) {
    height: 70px;
  }
`

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  background: rgba(246, 246, 248, 0.9);
  box-shadow: 0 0 15px rgb(0 0 0 / 10);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: #151515;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.03);

  @media (max-width: 1324px) {
    height: 70px;
  }

  .header-wrapper {
    width: 100%;
    max-width: 1290px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1324px) {
    .header-wrapper {
      padding: 0 30px;
    }

  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 120px;
  }

  @media (max-width: 1324px) {
    img {
      max-width: 100px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 500;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }

  .circle {
    height: 21px;
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    background-color: #252525;
    top: 22px;
    left: 24px;
  }

  .circle span {
    color: #fff;
    font-weight: 300;
    font-size: 12px;
  }

  div svg path {
    transition: all 0.3s;
  }

  div svg:hover #icon {
    fill: #252525;
  }
`;
