import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  max-width: 1290px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: start;
  padding: 40px 0 40px 40px;
  grid-row-gap: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  max-width: 1290px;
  width: 100%;
  margin: 20px auto -20px auto;
  padding-left: 40px;
  font-size: 24px;
  color: #252525;
  font-weight: 600;
  
`
