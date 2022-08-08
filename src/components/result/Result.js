import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import StyledResult, {
  ResultTitle,
  StatusIndicator,
  StatusIndicatorRadiusLeft,
  StatusIndicatorRadiusRight,
  StatusMsg,
  StatusValue,
  StatusWrap,
} from "./style";

const Result = ({ t, value }) => {
  const [statusMsg, setStatusMsg] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setStatusData(value);
  }, [value]);

  const setStatusData = (value) => {
    switch (true) {
      case value === 0: {
        setIndex(0);
        break;
      }
      case value < 18.5: {
        setStatusMsg("Underweight");
        setIndex(1);
        break;
      }
      case value < 25: {
        setStatusMsg("Healthy weight");
        setIndex(2);
        break;
      }
      case value < 30: {
        setStatusMsg("Overweight");
        setIndex(3);
        break;
      }
      case value < 35: {
        setStatusMsg("Obesity (class I)");
        setIndex(4);
        break;
      }
      case value < 40: {
        setStatusMsg("Obesity (class II)");
        setIndex(4);
        break;
      }
      default: {
        setStatusMsg("Obesity (class III)");
        setIndex(4);
      }
    }
  };

  return (
    <StyledResult>
      <ResultTitle>{t("Result")}</ResultTitle>
      <StatusWrap>
        <StatusIndicator index={index} />
        <StatusValue value={value}>
          <StatusIndicatorRadiusLeft />
          {value === 0 ? "-" : value.toFixed(2)}
          <StatusIndicatorRadiusRight />
        </StatusValue>
      </StatusWrap>
      <StatusMsg index={index}>{value !== 0 && t(statusMsg)}</StatusMsg>
    </StyledResult>
  );
};

export default withTranslation()(Result);
