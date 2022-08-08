import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.875rem 2.524rem;
  cursor: pointer;
  background: var(--blue);
  border: 0;
  border-radius: 2rem;
  color: var(--white);
  font-family: "Alumni Sans", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: background .3s linear;

  &:hover {
    background: var(--black);
  }
`;

export default StyledButton;
