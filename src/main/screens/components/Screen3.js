import { Button } from "antd";
import React from "react";

const Screen3 = ({ props }) => {
  const { classes, name, handleNext } = props;

  return (
    <div className={classes.formScreen1}>
      {/* <h1>Leuk je te leren kennen "{name}"</h1> */}
      <h1>Welcome "{name}"</h1>
      <Button
        style={{ marginTop: "50px" }}
        variant="contained"
        onClick={handleNext}
        type="primary"
      >
        Next
      </Button>
    </div>
  );
};

export default Screen3;
