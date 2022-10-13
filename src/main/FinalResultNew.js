import React from "react";
import { useLocation } from "react-router-dom";
import classes from "../../src/main/FinalResultNew.module.css";

const FinalResultNew = ({ props }) => {
    const { state } = useLocation();

    return (
        <div className={classes.main}>
            <div className={classes.logo}>
                <img src="https://cdn.shopify.com/s/files/1/0412/2804/2399/files/Douxds-Primary-Logo-RGB-Black-500px_200x.png?v=1614448832" />
            </div>
            <div className={classes.FinalNewWrapper}>
                <h1>Performance Skincare Regimen</h1>

                <div className={classes.NewInnerWrapper}>
                    <div className={classes.left}>
                        <img src="https://cdn.shopify.com/s/files/1/0412/2804/2399/products/CSS1_4x5-min_720x.jpg?v=1636041240" />
                    </div>
                    <div className={classes.right}>
                        <h1>{`We’re excited to see you level up ${state?.name}!`}</h1>

                        <h2>About Skin Type</h2>
                        <h4>
                            Skincare requires a holistic approach and since you’re {state?.age}, you have plenty of time to maximize your
                            looks. Based on your results, you have {state?.skinType.split(":")[0]} skin and a skincare goal to{" "}
                            {state?.skinGoals}. The purpose of your performance skincare regimen will be to reach your goal in 6 months with
                            solution.
                        </h4>
                        <h2>Face Product You Use</h2>
                        <h4>
                            Cleansing and moisturizing every day is a default move for you.{" "}
                            {state?.product?.includes("This would be my first time")
                                ? "It looks like you already have a go-to cleanser and moisturizer that works for you so keep using that. Switching up products too often can lead to unnecessary skinirritation. If you want to switch to our products, do so gradually."
                                : `It looks like you came to us at the right time. Cleansing and moisturizing your skin are the bareminimum steps you should take to solve ${state?.problem}`}
                        </h4>

                        <h2>Facial Hair</h2>
                        <h4>
                            Since your facial hair is {state?.texture} and you like to have {state?.facialStatus}, you should also exfoliate
                            your facial hair areas {state?.exercise} times per week.{" "}
                            {state?.shave === "Single blade razor" || state?.shave === "Multi-blade razor"
                                ? `Be
            very aware of the ${state?.shave} you use and make sure it’s clean. Skin
            irritation will happen regardless of the blade that’s why
            exfoliation and moisturizing will come in clutch.`
                                : `
            Keeping it natural is always advantageous for skin health. Just make
            sure you keep your skin clean to remove excess oils and dead skin to
            keep yourself smooth.
            `}
                        </h4>
                        <h2>Your Lifestyle</h2>
                        <h4>
                            In general, your {state?.environment} work lifestyle probably means you’re busy. You’re a go-getter though so
                            make sure you{" "}
                            {state?.water === "None"
                                ? `start drinking water throughout the day. Start with 1 glass or
            bottle per day and work your way up. Small healthy decisions over
            long periods of time always pay off, trust.`
                                : ` keep
            doing what you’re doing and keep pushing yourself. The compound
            effect is real and you’re already on the road to success.`}
                        </h4>
                    </div>
                </div>
                {/* <div className={classes.NewInnerWrapperBottom}>
                    <h3>
                        Since your facial hair is {props.texture} and you like to have {props.facialStatus}, you should also exfoliate your
                        facial hair areas {props.exercise} times per week.{" "}
                        {props.shave === "Single blade razor" || props.shave === "Multi-blade razor"
                            ? `Be
            very aware of the ${props.shave} you use and make sure it’s clean. Skin
            irritation will happen regardless of the blade that’s why
            exfoliation and moisturizing will come in clutch.`
                            : `
            Keeping it natural is always advantageous for skin health. Just make
            sure you keep your skin clean to remove excess oils and dead skin to
            keep yourself smooth.
            `}
                    </h3>
                </div> */}
                <div className={classes.NewInnerWrapper}>
                    <div className={classes.right}>
                        <h2>Tips for you</h2>
                        <h4>
                            Cleansing and moisturizing every day is a default move for you.
                            {state?.product.includes("This would be my first time")
                                ? "It looks like you already have a go-to cleanser and moisturizer that works for you so keep using that. Switching up products too often can lead to unnecessary skinirritation. If you want to switch to our products, do so gradually."
                                : `It looks like you came to us at the right time. Cleansing and moisturizing your skin are the bareminimum steps you should take to solve ${state?.problem}`}
                        </h4>
                        <h4>
                            As a rule of thumb, it’s best to eat 1 serving of fruits and vegetables every day. Fruit and vegetables contain
                            powerful antioxidants that help to protect the skin from the cellular damage caused by free radicals.
                        </h4>
                        <h4>
                            With this, you’re well on your way to {state?.skinGoals}! Our goal is to make sure you see and maintain your
                            results. The only way to do that is by measuring your progress. The next step is to use your 20% discount code
                            to pick up your recommended product. Once you receive your next order, begin to document your skincare results
                            every 14 days. Simply take a quick selfie or video.
                        </h4>
                        <h4>
                            As you go along your journey, use these points re-up on your recommended product when you need it. Remember you
                            also have our undivided attention and support. Feel free to text our Licensed Esthetician and Grooming Experts
                            if you have any questions.
                        </h4>
                    </div>
                    <div className={classes.left}>
                        <img src="https://cdn.shopify.com/s/files/1/0412/2804/2399/products/WP2_Bundle4x5-min_1080x.jpg?v=1633294645" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalResultNew;
