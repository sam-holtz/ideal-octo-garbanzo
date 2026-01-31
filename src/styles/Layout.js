import styled from "styled-components";

export const OuterLayout = styled.section`
  padding: 5rem clamp(2rem, 8vw, 18rem);
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 1347px) {
    padding: 4rem clamp(2rem, 6vw, 8rem);
  }
  @media screen and (max-width: 990px) {
    padding: 3rem clamp(1.5rem, 4vw, 4rem);
  }
`;

export const InnerLayout = styled.section`
  padding: 6rem 0;
`;
