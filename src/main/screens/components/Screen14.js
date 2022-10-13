import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen14 = ({ props }) => {
  const { classes, problem, setProblem, skinType, handleNext, handleBack } =
    props;
  const handleChange = (e) => {
    setProblem(e.target.value);
  };

  const problemOptions = [
    "Every day",
    "A few times a week",
    "Once or twice a month",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>
        How often do you experience {skinType.split(":")[0]} Skin problem?
      </h1>

      <Radio.Group
        onChange={handleChange}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {problemOptions.map((item, i) => (
            <Radio.Button key={i} value={item} className={classes.styledRadio}>
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
          disabled={!problem}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen14;
