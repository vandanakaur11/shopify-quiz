import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen15 = ({ props }) => {
  const { classes, shave, setShave, handleNext, handleBack } = props;
  const handleChange = (e) => {
    setShave(e.target.value);
  };

  const shaveOptions = [
    "Multi-blade razor",
    "Single blade razor",
    "Electric trimmer",
    "Head hair clippers",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>When you shave, what kind of razor do you use?</h1>

      <Radio.Group
        onChange={handleChange}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {shaveOptions.map((item, i) => (
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
          disabled={!shave}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen15;
