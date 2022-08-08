import styled from "styled-components";

const getColor = index => {
  switch (index) {
    case 1:
      return "var(--yellow)";
    case 2:
      return "var(--green)";
    case 3:
      return "var(--orange)";
    case 4:
      return "var(--red)";
    default:
      return "var(--black)";
  }
};

const StyledResult = styled.div`
  margin: 1rem 0 0;
  padding: 2rem;
  max-width: 400px;
  background-color: var(--white);
  box-shadow: 0 0 30px 0 var(--gray-dark);
  border-radius: 2rem;
`;

export const ResultTitle = styled.div`
  margin: 0 0 .5rem;
  font-size: 1.25rem;
  text-align: center;
`;

export const StatusWrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 1rem;
  width: 9rem;
  height: 3.25rem;
  line-height: 3.25rem;
  overflow: hidden;
  text-align: center;
`;

export const StatusIndicator = styled.div`
  position: absolute;
  top: 0;
  left: calc((100% - 9rem) / 2 - ${(props) => props.index} * (1200px * 0.21));
  z-index: 1;
  width: 1200px;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--gray-medium) 0% 16%,
    var(--yellow) 21% 37%,
    var(--green) 42% 58%,
    var(--orange) 63% 79%,
    var(--red) 84% 100%
  );
  transition: left 0.6s linear;
`;

export const StatusIndicatorRadiusLeft = styled.span`
  display: block;
  width: 52px;
  height: 52px;
  top: 0;
  left: -40px;
  overflow: hidden;
  position: absolute;

  &::before {
    content: "";
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    top: -12px;
    left: 12px;
    border: 12px solid var(--white);
  }
`;

export const StatusIndicatorRadiusRight = styled.span`
  display: block;
  width: 52px;
  height: 52px;
  top: 0;
  right: -40px;
  overflow: hidden;
  position: absolute;

  &::before {
    content: "";
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: transparent;
    position: absolute;
    top: -12px;
    right: 12px;
    border: 12px solid var(--white);
  }
`;

export const StatusValue = styled.div`
  position: relative;
  z-index: 2;
  width: 7rem;
  color: ${(props) => (props.value === 0 ? "var(--black)" : "var(--white)")};
  font-size: 1.375rem;
  font-weight: 500;
`;

export const StatusMsg = styled.div`
  margin: 0.5rem 0 0;
  height: 1.375rem;
  color: ${(props) => getColor(props.index)};
  font-size: 1.375rem;
  font-weight: 500;
  text-align: center;
  transition: color .6s linear;
`;

export default StyledResult;
