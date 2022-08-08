import React from "react";
import { withTranslation } from "react-i18next";
import { InputRadio, Label } from "../../components";
import StyledUnitSelector from "./style";

const UnitSelector = ({ handleClick, t }) => (
  <StyledUnitSelector>
    <InputRadio
      defaultChecked
      id="unit-metric"
      name="unit"
      onClick={e => handleClick(e)}
      value="metric"
    />
    <Label
      htmlFor="unit-metric"
      key="unit-metric"
    >
      {t("Metric")}
    </Label>

    <InputRadio
      id="unit-imperial"
      name="unit"
      onClick={e => handleClick(e)}
      value="imperial"
    />
    <Label
      htmlFor="unit-imperial"
      key="unit-imperial"
    >
      {t("Imperial")}
    </Label>
  </StyledUnitSelector>
);

export default withTranslation()(UnitSelector);
