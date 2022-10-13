import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";
import { Radio, Space } from "antd";

const Screen10 = ({ props }) => {
  const { classes, diet, setDiet, handleNext, handleBack } = props;
  const handleChange = (e) => {
    setDiet(e.target.value);
  };

  const diets = [
    "Serious about macronutrients",
    "Well balanced and simple",
    "Cleaning up my eating habits",
    "I need some guidance",
  ];
  return (
    <div className={classes.formScreen4}>
      <h1>Describe your diet .</h1>

      <Radio.Group
        onChange={handleChange}
        // defaultValue={diets[0]}
        optionType="button"
        buttonStyle="solid"
      >
        <Space direction="vertical">
          {diets.map((item, i) => (
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
          disabled={!diet}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen10;
