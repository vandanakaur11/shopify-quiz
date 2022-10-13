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

const Screen9 = ({ props }) => {
  const {
    classes,

    texture,
    setTexture,
    handleNext,
    handleBack,
  } = props;
  const handleChange = (e) => {
    setTexture(e.target.value);
  };

  const textures = ["Straight", " Wavy", " Curly", " Corse"];
  return (
    <div className={classes.formScreen4}>
      <h1>What is your natural hair texture?</h1>

      <Radio.Group
        onChange={handleChange}
        // defaultValue={textures[0]}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {textures.map((item, i) => (
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
          disabled={!texture}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen9;
