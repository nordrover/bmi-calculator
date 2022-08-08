import StyledInput, { InputWrap } from "./style";

const InputField = ({ autoComplete, id, name, type, unit, ...props }) => (
  <InputWrap>
    <StyledInput
      autoComplete={autoComplete || "off"}
      id={id}
      name={name || id}
      type={type || "text"}
      {...props}
    />
    <span>{unit}</span>
  </InputWrap>
);

export default InputField;
