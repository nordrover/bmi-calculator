import styled from "styled-components";

const StyledUnitSelector = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 50% 50%;

  input {
    position: absolute;
    top: -9999rem;
    left: -9999rem;
  }

  label {
    margin: 0 0 0.5rem;
    padding: 1.25rem 2rem;
    text-align: center;
    transition: all .3s linear;
  }

  input:not(:checked) + label {
    cursor: pointer;
    background-color: var(--gray-medium);

    &:hover {
      background-color: var(--blue);
      color: var(--white);
    }
  }

  input:checked + label {
    position: relative;
    cursor: default;
    background-color: var(--blue);
    color: var(--white);

    &::before {
      content: '';
      display: block;
      position: absolute;
      bottom: -0.5rem;
      left: calc(50% - 0.5rem);
      width: 0;
      height: 0;
      border-width: .5rem .5rem 0 .5rem;
      border-style: solid;
      border-color: var(--blue) transparent transparent transparent;
    }
  }
`;

export default StyledUnitSelector;
