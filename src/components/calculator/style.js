import styled from "styled-components";
import StyledUnitSelector from "../unit-selector/style";
import StyledButton from "../button/style";

const StyledBox = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  width: 400px;
  max-width: calc(100vw - 2rem);
  background-color: var(--white);
  border-radius: 2rem;
  box-shadow: 0 0 30px 0 var(--gray-dark);

  ${StyledUnitSelector} {
    margin-bottom: 2rem;
    width: calc(100% + 4rem);
    overflow: hidden;
    border-radius: 2rem 2rem 0 0;
  }

  ${StyledButton} {
    margin-top: 0.875rem;
  }
`;

export default StyledBox;
