import { IconButton } from "@material-ui/core";
import React from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#C7CFAD",
    },
  },
});

const Screen12 = ({ props }) => {
  const { classes, exercise, setExercise, handleNext, handleBack } = props;
  //   const handleChange = (e) => {
  //     setExercise(e.target.value);
  //   };

  const days = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
    {
      value: 6,
      label: "6",
    },
    {
      value: 7,
      label: "7",
    },
  ];

  return (
    <div className={classes.formScreen4}>
      <h1>How many days during the week do you get physical exercise?</h1>
      <Box sx={{ width: 300, margin: "0 auto" }}>
        <ThemeProvider theme={theme}>
          <Slider
            aria-label="Always visible"
            defaultValue={1}
            classes
            onChange={(e) => setExercise(e.target.value)}
            //   getAriaValueText={valuetext}
            max={7}
            //   step={7}
            marks={days}
            //   color={"#0c5b45"}
            valueLabelDisplay="on"
          />
        </ThemeProvider>
      </Box>

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
          disabled={!exercise}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen12;
