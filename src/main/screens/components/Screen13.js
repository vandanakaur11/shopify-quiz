import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import ArrowImg from "../../../assets/images/arrowBtn1.svg";
import ArrowBack from "../../../assets/images/arrowBack1.svg";
import { Radio, Space } from "antd";
// import classes from "../Form2.module.css";

const Screen13 = ({ props }) => {
  const { classes, product, setProduct, handleNext, handleBack } = props;
  const handleSelect = (item) => {
    let index = product.indexOf(item);
    if (index === -1) {
      setProduct((prev) => [...prev, item]);
    } else {
      let newProduct = [...product];
      newProduct.splice(index, 1);
      setProduct(newProduct);
    }
  };

  const products = [
    "This would be my first time",
    "Face wash",
    "Moisturizer",
    "Toner",
    "Sunscreen",
    "Serums",
  ];

  return (
    <div className={classes.formScreen4}>
      <h1>Do you currently use skincare products? If so select which ones.</h1>
      {/* <div
                className={classes.styledRadio}
                style={{
                  border: "1px solid gray",
                  width: "fit-content",
                  margin: "0 auto",
                }}
            >
                hell world
            </div> */}
      {/* <Radio.Group
                onChange={handleChange}
                // defaultValue={products[0]}
                optionType="button"
                buttonStyle="solid"
                // options={products}
            >
                <Space direction="vertical">
                    {products.map((item, i) => (
                        <Radio.Button key={i} value={item} className={classes.styledRadio} checked={product.includes(item) ? true : false}>
                            {item}
                        </Radio.Button>
                    ))}
                </Space>
            </Radio.Group> */}
      <div>
        {products.map((item, i) => (
          // productListSelected
          // productList
          <div
            className={
              product?.includes(item)
                ? classes.productListSelected
                : classes.productList
            }
            key={i}
            onClick={() => handleSelect(item)}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className={classes.rightLeftBtns}>
        <IconButton
          style={{ margin: "20px auto" }}
          onClick={handleBack}
          disabled={product.length === 0}
          className={classes.screen4Button}
        >
          <img src={ArrowBack} alt="" />
        </IconButton>
        <IconButton
          style={{ margin: "20px auto" }}
          onClick={handleNext}
          disabled={product.length === 0}
          className={classes.screen4Button}
        >
          <img src={ArrowImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default Screen13;
