import React from "react";
// import { Button } from "@material-ui/core";
import { Button } from "antd";

const Screen1 = ({ props }) => {
  const { classes, handleNext } = props;

  return (
    <div className={classes.formScreen1}>
      {/* <h1>Hi, It's Good to have you here</h1> */}
      <h1>Ready to level up?</h1>
      {/* <h2 className={classes.animation}>"We make safe air visible to you"</h2> */}
      <h3 className={classes.animation}>
        “We are pumped to work with you on your performance skincare journey.
        This questionnaire will take about 3 minutes to complete. We’ll then
        recommend a curated performance skincare regimen that just works for
        you.”
      </h3>
      <Button variant="contained" onClick={handleNext} type="primary">
        Get Started
      </Button>
    </div>
  );
};

export default Screen1;
