import React from "react";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  // Radio,
  // RadioGroup,
} from "@material-ui/core";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import { Radio, Space } from "antd";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

const Screen4 = ({ props }) => {
  const { classes, setSkinType, skinType, handleNext, handleBack } = props;
  const businessOptions = [
    "Normal: If your skin is neither, dry, oily, or sensitive, your skin is classified as normal.",
    "Dry: If your skin gets tight and flaky, you have dry skin. Dry skin is often sensitive.",
    "Oily: If your face tends to be oily even after you have washed it, your skin type is oily.",
    "Sensitive: If you get breakouts after being exposed to the sun or after using some products, your skin is classified as sensitive.",
    "Combination: A combined skin type can be identified when a person has an oily forehead, but the rest of their face is dry.",
  ];

  const handleChange = (event) => {
    setSkinType(event.target.value);
  };

  return (
    <div className={classes.formScreen4}>
      <h1>What's Your Skin Type?</h1>

      <Radio.Group
        // options={businessOptions}
        onChange={handleChange}
        // defaultValue={businessOptions[0]}
        // value={value4}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {businessOptions.map((item, i) => (
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
          disabled={!skinType}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen4;
