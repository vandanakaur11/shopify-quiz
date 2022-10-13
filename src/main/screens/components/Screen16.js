import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import { Radio, Space } from "antd";

const Screen16 = ({ props }) => {
  const { classes, environment, setEnvironment, handleNext, handleBack } =
    props;
  const handleChange = (e) => {
    setEnvironment(e.target.value);
  };

  const envOptions = [
    "Corporate office",
    "Outdoor construction",
    "Restaurant or bar",
    "Hospital",
    "Military",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>What does your work environment look like ?</h1>

      <Radio.Group
        onChange={handleChange}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {envOptions.map((item, i) => (
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
          disabled={!environment}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen16;
