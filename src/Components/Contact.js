import React from "react";

import { FiArrowRight } from "react-icons/fi";

import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { CCard } from "@coreui/react";
import { CListGroup } from "@coreui/react";
import { CListGroupItem } from "@coreui/react";
import { CCardBody } from "@coreui/react";
import { CCardTitle } from "@coreui/react";
import { CForm } from "@coreui/react";
import { CCardText } from "@coreui/react";
import { CCardLink } from "@coreui/react";
import { CRow } from "@coreui/react";
import { CCol } from "@coreui/react";
import { CCardImage } from "@coreui/react";
import { CFormInput } from "@coreui/react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
};
const Contact = () => {
  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h7 className="primary-heading-welcome"> CONTACT US </h7>
            <h1 className="primary-heading">Reach out to us .</h1>
            <p className="primary-text">
              Join the inclusive membership in the community of Your Number
              Guaranteed. Membership is extended to every person who owns a Your
              Number Guaranteed Token. Members will enjoy a lifetime of free
              benefits. Read our book and you can purchase your Token here!
              <br /> <br /> <br />
            </p>
            <div className="button">
              <button className="about-button-2">
                Buy a Book &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FiArrowRight />
              </button>
            </div>
            <br /> <br /> <br />
            <br /> <br /> <br />
          </div>
          <div>
            {/*   <div>
              <h1>Helllo</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Full Name..."
                  {...register("FullName")}
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Email..."
                  {...register("Email")}
                />{" "}
                <br />
                <input
                  type="text"
                  placeholder="Age..."
                  {...register("Age")}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password..."
                  {...register("password")}
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Confirm Password..."
                  {...register("ConfirmPassword")}
                />{" "}
                <br />
                <input type="submit" />
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
