import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen6 = ({ props }) => {
  const { classes, tone, setTone, handleNext, handleBack } = props;

  const skinTones = [
    "Pale white",
    "White",
    "Tan",
    "Brown",
    "Dark brown",
    "Black",
  ];
  const handleChange = (event) => {
    setTone(event.target.value);
  };

  return (
    <div className={classes.formScreen4}>
      <h1>What is your skin tone?</h1>

      <Radio.Group
        // options={businessOptions}
        onChange={handleChange}
        // defaultValue={skinTones[0]}
        // value={value4}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {skinTones.map((item, i) => (
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
          disabled={!tone}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen6;
