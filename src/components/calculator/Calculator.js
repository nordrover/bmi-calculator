import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import {
  Button,
  Flex,
  InputField,
  Label,
  Result,
  Title,
  UnitSelector,
} from "../../components";
import StyledBox from "./style";

const Calculator = ({ t }) => {
  const [heightCm, setHeightCm] = useState(0);
  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInch, setHeightInch] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [unitType, setUnitType] = useState("metric");

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleCalculate();
    }
  };

  const handleMetricCalculate = () => {
    const value = weight / Math.pow(heightCm / 100, 2);
    setResult((isFinite(value) && value) || 0);
  };

  const handleImperialCalculate = () => {
    const height = heightFeet * 12 + heightInch;
    const value = (weight / Math.pow(height, 2)) * 703;
    setResult((isFinite(value) && value) || 0);
  };

  const handleCalculate = () => {
    if (unitType === "metric") {
      return handleMetricCalculate();
    }
    return handleImperialCalculate();
  };

  const handleSelectUnit = (e) => {
    setUnitType(e.target.value);
    resetData();
  };

  const resetData = () => {
    setHeightCm(0);
    setHeightFeet(0);
    setHeightInch(0);
    setWeight(0);
    setResult(0);
  };

  return (
    <>
      <Title main={t("BMI Calculator")} sub={t("for adults")} />

      <StyledBox>
        <UnitSelector handleClick={handleSelectUnit} />

        <Label htmlFor="heightCm">{t("Height")}</Label>
        {unitType === "metric" && (
          <>
            <InputField
              id="heightCm"
              onChange={(e) => setHeightCm(Number(e.target.value))}
              type="number"
              unit="cm"
              value={heightCm}
            />
          </>
        )}

        {unitType === "imperial" && (
          <>
            <Flex>
              <InputField
                id="heightFeet"
                onChange={(e) => setHeightFeet(Number(e.target.value))}
                type="number"
                unit="feet"
                value={heightFeet}
              />
              <InputField
                id="heightInch"
                onChange={(e) => setHeightInch(Number(e.target.value))}
                type="number"
                unit="inch"
                value={heightInch}
              />
            </Flex>
          </>
        )}

        <Label htmlFor="weight">{t("Weight")}</Label>
        <InputField
          id="weight"
          onChange={(e) => setWeight(Number(e.target.value))}
          type="number"
          unit={unitType === "metric" ? "kg" : "lbs"}
          value={weight}
        />

        <Button onClick={handleCalculate}>{t("Calculate")}</Button>
      </StyledBox>

      <Result value={result} />
    </>
  );
};

export default withTranslation()(Calculator);
