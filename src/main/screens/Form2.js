import React, { useState, useEffect, useCallback } from "react";
import classes from "./Form2.module.css";
import { useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import ArrowImg from "../../assets/images/arrowBtn1.png";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen5 from "./components/Screen5";
import Screen6 from "./components/Screen6";
import Screen7 from "./components/Screen7";
import Screen8 from "./components/Screen8";
import Screen12 from "./components/Screen12";
// import FinalResult from "./components/FinalResult";
import FinalResultNew from "../FinalResultNew";
import Screen9 from "./components/Screen9";
import Screen10 from "./components/Screen10";
import Screen11 from "./components/Screen11";
import Screen13 from "./components/Screen13";
import Screen14 from "./components/Screen14";
import Screen15 from "./components/Screen15";
import Screen16 from "./components/Screen16";
import Screen17 from "./components/Screen17";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Form = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [tone, setTone] = useState("");
    const [skinGoals, setSkinGoals] = useState("");
    const [facialStatus, setFacialStatus] = useState("");
    const [texture, setTexture] = useState("");
    const [diet, setDiet] = useState("");
    const [water, setWater] = useState("");
    const [exercise, setExercise] = useState("");
    const [product, setProduct] = useState([]);
    const [problem, setProblem] = useState("");
    const [shave, setShave] = useState("");
    const [environment, setEnvironment] = useState("");
    const [email, setEmail] = useState("");
    const [skinType, setSkinType] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [keyCode, setKeyCode] = useState(0);
    useEffect(() => {
        // if (activeStep % 2 === 0 && activeStep < 3) {
        //   setTimeout(() => {
        //     setActiveStep(activeStep + 1);
        //   }, 5000);
        // }
        // window.scrollTo(0, 0);
        setTimeout(() => {
            document.getElementById("img").scrollTo(0, 0);
        }, 300);
    }, [activeStep]);

    const handleNext = useCallback((step, value) => {
        // console.log(typeof keyCode);
        if (keyCode === 32 || keyCode === 9) return;
        if (typeof step === "number") return setActiveStep(step);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }, []);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step, prevIndex, meta) => {
        setActiveStep(step);
    };
    const printDocument = () => {
        const input = document.getElementById("divToPrint");
        html2canvas(input).then((canvas) => {
            let divWidth = input.offsetWidth;
            let divHeight = input.offsetHeight;
            const orientation = divWidth >= divHeight ? "l" : "p";
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({
                orientation,
                unit: "px",
            });
            pdf.internal.pageSize.width = divWidth;
            pdf.internal.pageSize.height = divHeight;

            pdf.addImage(imgData, "PNG", 0, 0, divWidth, divHeight);
            pdf.save("download.pdf");
        });
    };

    const newScreens = [
        Screen1,
        Screen2,
        Screen3,
        Screen4,
        Screen5,
        Screen6,
        Screen7,
        Screen8,
        Screen9,
        Screen10,
        Screen11,
        Screen12,
        Screen13,
        Screen14,
        Screen15,
        Screen16,
        Screen17,
        // FinalResultNew,
    ];

    const prop1 = { classes, handleNext };
    const prop2 = { classes, name, setName, handleNext };
    const prop3 = { classes, name, handleNext };
    const prop4 = { classes, skinType, setSkinType, handleNext, handleBack };
    const prop5 = { classes, age, setAge, handleNext, handleBack };
    const prop6 = { classes, setTone, tone, handleNext, handleBack };
    const prop7 = { classes, skinGoals, setSkinGoals, handleNext, handleBack };
    const prop8 = {
        classes,
        facialStatus,
        setFacialStatus,
        handleNext,
        handleBack,
    };
    const prop9 = { classes, texture, setTexture, handleNext, handleBack };
    const prop10 = { classes, diet, setDiet, handleNext, handleBack };
    const prop11 = { classes, water, setWater, handleNext, handleBack };
    const prop12 = { classes, exercise, setExercise, handleNext, handleBack };
    const prop13 = { classes, product, setProduct, handleNext, handleBack };
    const prop14 = {
        classes,
        problem,
        setProblem,
        skinType,
        handleNext,
        handleBack,
    };
    const prop15 = { classes, shave, setShave, handleNext, handleBack };
    const prop16 = {
        classes,
        environment,
        setEnvironment,
        handleNext,
        handleBack,
    };
    const prop17 = {
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
    };
    const finalProps = {
        classes,
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
        email,
        printDocument,
    };

    const props = [
        prop1,
        prop2,
        prop3,
        prop4,
        prop5,
        prop6,
        prop7,
        prop8,
        prop9,
        prop10,
        prop11,
        prop12,
        prop13,
        prop14,
        prop15,
        prop16,
        prop17,
        finalProps,
    ];

    return (
        <div className={classes.container}>
            <IconButton disabled={activeStep === 0 || activeStep === 1 || activeStep === 20} onClick={handleBack}>
                {/* <img src={ArrowImg} alt="" /> */}
            </IconButton>
            <div className={classes.form} id="img">
                <img
                    src="https://cdn.shopify.com/s/files/1/0412/2804/2399/files/Douxds-Primary-Logo-RGB-Black-500px_140x.png?v=1614448832"
                    alt="logo"
                />
                <div className={classes.silder}>
                    <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeStep}
                        disabled={true}
                        onKeyDown={(e) => {
                            setKeyCode(e.keyCode);
                        }}
                        onChangeIndex={handleStepChange}
                        // onChangeIndex={(e) => console.log(activeStep)}
                        // enableMouseEvents={false}
                        // // onSw
                        // onKeyPress={false}
                    >
                        {newScreens.map((Screen, index) => (
                            <Screen key={index} props={props[index === 20 ? 19 : index]} />
                        ))}
                    </SwipeableViews>
                </div>
            </div>
        </div>
    );
};

export default Form;
