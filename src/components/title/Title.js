import StyledH1 from "./style";

const Title = ({main, sub}) => (
  <StyledH1>
    {main}
    <span>{sub}</span>
  </StyledH1>
);

export default Title;
