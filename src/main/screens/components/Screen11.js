import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen11 = ({ props }) => {
  const { classes, water, setWater, handleNext, handleBack } = props;
  const handleChange = (e) => {
    setWater(e.target.value);
  };

  const waterOptions = [
    "None",
    "16 - 32 oz (1 - 2 regular bottles)",
    "32 - 64 oz (1 - 2 large bottles)",
    "64 - 128 oz (0.5 - 1 gallon jugs)",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>How much water do you drink per day?</h1>

      <Radio.Group
        onChange={handleChange}
        // defaultValue={waterOptions[0]}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {waterOptions.map((item, i) => (
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
          disabled={!water}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen11;
