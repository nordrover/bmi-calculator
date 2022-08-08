import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 2rem;
  color: var(--black);
  font-size: clamp(2.75rem, 6.67vw, 3.5rem);
  font-weight: 700;
  text-align: center;

  span {
    position: relative;
    display: block;
    margin-left: .75rem;
    padding: 0 .75rem;
    line-height: 2.25rem;
    background-color: var(--blue);
    border-radius: .5rem;
    color: var(--white);
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
    font-weight: 500;
    letter-spacing: 1px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: .625rem;
      left: -0.475rem;
      width: 0;
      height: 0;
      border-width: .5rem .5rem .5rem 0;
      border-style: solid;
      border-color: transparent var(--blue) transparent transparent;
    }
  }
`;

export default StyledH1;
