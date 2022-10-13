import React, { useState } from "react";

import { Backdrop, Button, CircularProgress } from "@mui/material";
import { Timeline } from "antd";
// import timLineLogo from "../../../assets/images/d-01.png";
import timLineLogo from "../../../assets/images/d.svg";
import Pdf from "react-to-pdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useHistory } from "react-router-dom";

// import CircularProgress from "@mui/material/CircularProgress";
// import CircularProgress from "@mui/material/Button";
const FinalResult = ({ props }) => {
  const {
    name,
    skinType,
    tone,
    age,
    classes,
    facialStatus,
    texture,
    exercise,
    product,
    diet,
    problem,
    shave,
    water,
    skinGoals,
    environment,
    printDocument,
  } = props;

  const [url, setUrl] = useState("false");
  const history = useHistory();
  const handleGenerate = () => {
    if (
      skinType === "Dry" ||
      skinType === "Normal" ||
      skinType === "Combination"
    ) {
      window.location.href = "https://douxds.com/pages/dry-skin";
    } else {
      window.location.href = "https://douxds.com/pages/oily-skin";
    }
  };
  const handleClose = () => {
    // setOpen(false);
  };
  //   css in Form2.module.css

  return (
    <div>
      <div className={classes.finalResult} id="divToPrint">
        <div>
          <h1>Performance Skincare Regimen</h1>
        </div>
        <h2
          style={{ margin: "20px 0" }}
        >{`We’re excited to see you level up ${name}!`}</h2>
        <div
          // style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
          className={classes.timelineContainer}
        >
          <Timeline
            style={{ backgroundColor: "transparent", padding: "0", margin: 0 }}
          >
            <Timeline.Item
              color="#0c5b45"
              className={classes.timelineItem}
              // dot={
              //   <div>
              //     <img src={timLineLogo} />
              //   </div>
              // }
            >
              Skincare requires a holistic approach and since you’re {age}, you
              have plenty of time to maximize your looks. Based on your results,
              you have {skinType.split(":")[0]} skin and a skincare goal to{" "}
              {skinGoals}. The purpose of your performance skincare regimen will
              be to reach your goal in 6 months with solution.
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              Cleansing and moisturizing every day is a default move for you.{" "}
              {product.includes("This would be my first time")
                ? "It looks like you already have a go-to cleanser and moisturizer that works for you so keep using that. Switching up products too often can lead to unnecessary skinirritation. If you want to switch to our products, do so gradually."
                : `It looks like you came to us at the right time. Cleansing and moisturizing your skin are the bareminimum steps you should take to solve ${problem}`}
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              Since your facial hair is {texture} and you like to have{" "}
              {facialStatus}, you should also exfoliate your facial hair areas{" "}
              {exercise} times per week.{" "}
              {shave === "Single blade razor" || shave === "Multi-blade razor"
                ? `Be
            very aware of the ${shave} you use and make sure it’s clean. Skin
            irritation will happen regardless of the blade that’s why
            exfoliation and moisturizing will come in clutch.`
                : `
            Keeping it natural is always advantageous for skin health. Just make
            sure you keep your skin clean to remove excess oils and dead skin to
            keep yourself smooth.
            `}
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              In general, your {environment} work lifestyle probably means
              you’re busy. You’re a go-getter though so make sure you{" "}
              {water === "None"
                ? `start drinking water throughout the day. Start with 1 glass or
            bottle per day and work your way up. Small healthy decisions over
            long periods of time always pay off, trust.`
                : ` keep
            doing what you’re doing and keep pushing yourself. The compound
            effect is real and you’re already on the road to success.`}
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              These lifestyle tweaks will give you the energy and clarity to
              crush your daily goals and support your skin’s health. Your food
              diet is also incredibly important to reaching your skin goals.
              While one diet doesn’t fit everyone, note that oily and sugary
              foods do find their way back into your skin.
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              As a rule of thumb, it’s best to eat 1 serving of fruits and
              vegetables every day. Fruit and vegetables contain powerful
              antioxidants that help to protect the skin from the cellular
              damage caused by free radicals.
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              With this, you’re well on your way to {skinGoals}! Our goal is to
              make sure you see and maintain your results. The only way to do
              that is by measuring your progress. The next step is to use your
              20% discount code to pick up your recommended product. Once you
              receive your next order, begin to document your skincare results
              every 14 days. Simply take a quick selfie or video.
            </Timeline.Item>
            <Timeline.Item color="#0c5b45" className={classes.timelineItem}>
              As you go along your journey, use these points re-up on your
              recommended product when you need it. Remember you also have our
              undivided attention and support. Feel free to text our Licensed
              Esthetician and Grooming Experts if you have any questions.
            </Timeline.Item>
          </Timeline>
        </div>
        {/* <div style={{ marginBottom: "20px" }}>
        <Pdf targetRef={ref} filename="skincare.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Download Pdf</Button>}
        </Pdf>
      </div> */}
      </div>
      <div className={classes.btnContainer}>
        <Button
          onClick={printDocument}
          className={classes.finalBtn}
          variant="contained"
          style={{ background: "#0c5b45" }}
        >
          Download Pdf
        </Button>

        <Button
          onClick={() => window.open("https://douxds.com/", "_blank")}
          className={classes.finalBtn}
          variant="contained"
          style={{ background: "#0c5b45" }}
        >
          See Recommended Products
        </Button>
      </div>
    </div>
  );
};

export default FinalResult;
