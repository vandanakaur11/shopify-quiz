import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

const Screen5 = ({ props }) => {
  const { classes, age, setAge, handleNext, handleBack } = props;

  //**************SKIPPED***************/
  return (
    <div className={classes.formScreen1}>
      <h1>How Young Are You?</h1>

      <div className={classes.formScreenInput}>
        <input
          type="number"
          value={age}
          onChange={(e) =>
            setAge(
              +e.target.value === 0
                ? e.target.value.replace(/^0+/, "")
                : +e.target.value
            )
          }
          min={0}
          placeholder="18"
        />
        <IconButton onClick={handleNext} disabled={!age}>
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
      <IconButton
        style={{ margin: "20px auto" }}
        onClick={handleBack}
        className={classes.screen4Button}
      >
        <img src={ArrowBack} alt="" />
      </IconButton>
    </div>
  );
};

export default Screen5;
