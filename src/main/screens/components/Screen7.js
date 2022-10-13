import {
  FormControl,
  FormControlLabel,
  IconButton,
  // Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen7 = ({ props }) => {
  const {
    classes,

    skinGoals,
    setSkinGoals,
    handleNext,
    handleBack,
  } = props;
  const handleChange = (e) => {
    setSkinGoals(e.target.value);
  };

  //   const handleCheck = () => {
  //     if (people >= m2Space) {
  //       alert("Het aantal mensen moet minder zijn dan m2 Ruimte");
  //       return;
  //     }
  //     let output = (people / m2Space) * 10;
  //     output = Math.ceil(output);

  //     if (output === 1) {
  //       setStandards({
  //         boubesluit: 1.5,
  //         recommended: 3.5,
  //         netherlands: 4,
  //         covid_advises: 7,
  //         maximum_safety: 15,
  //       });
  //     }
  //     if (output === 2) {
  //       setStandards({
  //         boubesluit: 2.5,
  //         recommended: 7,
  //         netherlands: 7.2,
  //         covid_advises: 14,
  //         maximum_safety: 30,
  //       });
  //     }
  //     if (output === 3) {
  //       setStandards({
  //         boubesluit: 4,
  //         recommended: 11,
  //         netherlands: 12,
  //         covid_advises: 21,
  //         maximum_safety: 42,
  //       });
  //     }
  //     if (output === 4) {
  //       setStandards({
  //         boubesluit: 5,
  //         recommended: 15,
  //         netherlands: 16,
  //         covid_advises: 30,
  //         maximum_safety: 60,
  //       });
  //     }
  //     if (output === 5) {
  //       setStandards({
  //         boubesluit: 6,
  //         recommended: 18,
  //         netherlands: 20,
  //         covid_advises: 35,
  //         maximum_safety: 70,
  //       });
  //     }
  //     if (output === 6) {
  //       setStandards({
  //         boubesluit: 8,
  //         recommended: 22,
  //         netherlands: 25,
  //         covid_advises: 45,
  //         maximum_safety: 85,
  //       });
  //     }
  //     if (output === 7) {
  //       setStandards({
  //         boubesluit: 9,
  //         recommended: 28,
  //         netherlands: 29,
  //         covid_advises: 50,
  //         maximum_safety: 100,
  //       });
  //     }
  //     if (output === 8) {
  //       setStandards({
  //         boubesluit: 10,
  //         recommended: 30,
  //         netherlands: 32,
  //         covid_advises: 59,
  //         maximum_safety: 115,
  //       });
  //     }
  //     if (output === 9) {
  //       setStandards({
  //         boubesluit: 11,
  //         recommended: 35,
  //         netherlands: 38,
  //         covid_advises: 65,
  //         maximum_safety: 130,
  //       });
  //     }
  //     if (output === 10) {
  //       setStandards({
  //         boubesluit: 13,
  //         recommended: 38,
  //         netherlands: 40,
  //         covid_advises: 70,
  //         maximum_safety: 140,
  //       });
  //     }

  //     handleNext();
  //   };
  const goals = [
    "Reduce razor bumps and other shaving related issues (exfoliate)",
    "Stop whitehead acne from killing my vibe (exfoliate)",
    "Eliminate dry flakes around my face (exfoliate and moisturize)",
    "Prevent pre-mature wrinkles from forming (vitalize and moisturize)",
    "Even out my skin tone and reduce discoloration (exfoliate and moisturize)",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>What is your main skin goal?</h1>

      <Radio.Group
        // options={businessOptions}
        onChange={handleChange}
        // defaultValue={goals[0]}
        // value={value4}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {goals.map((item, i) => (
            <Radio.Button
              key={i}
              value={item}
              className={classes.styledRadioLarge}
            >
              {item}
            </Radio.Button>
          ))}
        </Space>
      </Radio.Group>
      <div className={classes.rightLeftBtns}>
        <IconButton
          style={{ margin: "20px auto" }}
          onClick={handleBack}
          // disabled={skinType}
          className={classes.screen4Button}
        >
          <img src={ArrowBack} alt="" />
        </IconButton>
        <IconButton
          style={{ margin: "20px auto" }}
          onClick={handleNext}
          disabled={!skinGoals}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen7;
