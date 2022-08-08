import styled from "styled-components";

const StyledFlexBlock = styled.div`
 @media (min-width: 400px) {
    display: flex;

    & > div {
      margin-left: .25rem;
      margin-right: .25rem;
    }
  }
`;

export default StyledFlexBlock;
