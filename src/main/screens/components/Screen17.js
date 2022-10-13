import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const Screen17 = ({ props }) => {
    const history = useHistory();
    const {
        classes,
        email,
        setEmail,
        handleNext,
        handleBack,
        skinGoals,
        name,
        skinType,
        tone,
        age,
        texture,
        diet,
        facialStatus,
        water,
        exercise,
        product,
        problem,
        shave,
        environment,
    } = props;

    const handleSendMail = async () => {
        const template_params = {
            user_email: email,
            to_name: name,
            from_name: "test",
            message: `Hello ${name} 
      Your Skin Care regimen 
      According to your quiz
      Skintype : ${skinType}
      SkinTone : ${tone}
      Age : ${age}
      Hair Texture : ${texture}
      Diet : ${diet}
      Facial Hair Status: ${facialStatus}
      Water Dosage : ${water}
      exercise routine : ${exercise}
      products you use : ${product}
      Skin Problems : ${problem}
      Shaving : ${shave}
      `,
        };
        const payload = {
            email: email,
            name: name,
            skinType,
            skinTone: tone,
            age,
            hairTexture: texture,
            diet: diet,
            facialHairStatus: facialStatus,
            waterDosage: water,
            exerciseRoutine: exercise,
            products: product,
            skinProblems: problem,
            shaving: shave,
        };
        const payload2 = {
            email,
            name,
            skinType,
            tone,
            age,
            texture,
            diet,
            facialStatus,
            water,
            exercise,
            product,
            problem,
            shave,
        };

        // .then(
        //   (result) => {
        //     console.log(result);
        //     notification.success({
        //       message: "Email Sent!",
        //       // description:"We Have Sent",
        //       duration: "3",
        //       placement: "topRight",
        //     });
        //     handleNext();
        //   },
        //   (error) => {
        //     console.log(error.text);
        //   }
        // );

        try {
            const res = await axios.post("https://sheet.best/api/sheets/73f65488-129a-4e84-bd79-6e0b03ffca7b", payload);

            const mailRes = await emailjs.send("service_8c0duye", "template_msow9ve", template_params, "user_6pLDnHDlzTFb4qYFwntcp");

            notification.success({
                message: "Email Sent!",
                // description:"We Have Sent",
                duration: "3",
                placement: "topRight",
            });

            // props.history.push({ path: "/result", state: props });
            history.push({
                pathname: "/result",
                state: payload2,
            });
            // window.location.replace("http://localhost:3000/result");
            // handleNext();
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    };
    return (
        <div className={classes.formScreen1}>
            {/* <h1>Let's Start with your first name</h1> */}
            <h1>What is your email? We will send your performance care regimen directly to you.</h1>

            <div className={classes.formScreenInput}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="JohnDoe@gmail.com" />
                <IconButton
                    //  onClick={handleNext}
                    onClick={handleSendMail}
                    disabled={email === ""}
                >
                    <img src={ArrowImg} alt="" />
                </IconButton>
            </div>
            <IconButton
                style={{ margin: "20px auto" }}
                onClick={handleBack}
                // disabled={skinType}
                className={classes.screen4Button}
            >
                <img src={ArrowBack} alt="" />
            </IconButton>
            {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        // onClose={() => setOpen(false)}
        message="Email Sent!"
        autoHideDuration={3000}
        // key={vertical + horizontal}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar> */}
        </div>
    );
};

export default Screen17;
