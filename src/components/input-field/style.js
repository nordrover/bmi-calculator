import styled from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  span {
    position: absolute;
    right: 2.5rem;
    width: 1rem;
    line-height: 3.5rem;
  }
`;

const StyledInput = styled.input`
  &[type="number"],
  &[type="text"] {
    position: relative;
    padding: 0.875rem 3.75rem 0.875rem 2.75rem;
    width: 9.5rem;
    background-color: var(--gray-light);
    border: 0;
    border-radius: 2rem;
    font-family: "Alumni Sans", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    text-align: right;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export default StyledInput;
