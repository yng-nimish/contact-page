import React from "react";

import Flag2 from "../Assets/USA.svg";
import Flag3 from "../Assets/Canada.svg";

import Swal from "sweetalert2";
import Footer from "./Footer";

const BookData = [
  {
    image: Flag2,
    title: "United States",
    text: (
      <div>
        <p>
          Your Number Guaranteed Inc. <br />
          3909 Witmer Rd. Suite #436 <br />
          Niagara Falls, NY <br />
          USA <br />
          14305
        </p>
      </div>
    ),
  },

  {
    image: Flag3,
    title: "Canada",
    text: (
      <div>
        <p>
          Your Number Guaranteed Inc.
          <br />
          PO Box 92567, Brampton Mall
          <br />
          Brampton, On <br />
          Canada <br />
          L6W 4R1
        </p>
      </div>
    ),
  },
];

export const Escalade = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c02d1701-ba2d-4c4f-a4ec-39d29ba377c5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent Successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="home-banner-container">
          <div className="rowC">
            <div>
              <p>
                <h7 className="primary-heading-welcome"> CONTACT US </h7>
                <h1 className="primary-heading">Reach out to us</h1>
              </p>
            </div>
            <div className="form">
              <form onSubmit={onSubmit}>
                <div className="input-box">
                  <label> Full Name</label>
                  <input
                    type="text"
                    className="field"
                    placeholder="Enter your Name"
                    name="name"
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="field"
                    placeholder="Enter your Email"
                    name="email"
                    required
                  />
                </div>
                <div className="input-box">
                  <label> Subject</label>
                  <input
                    type="text"
                    className="field"
                    placeholder="Enter Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="field mess"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                  <button type="submit">Send Message</button>
                </div>

                {/*       onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} 
              >
                <div className="input-box">
                  <label>Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    name="name"
                    className="field"
                  />
                  <br /> <br />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="field"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />{" "}
                  <br /> <br />
                </div>
                <div className="input-box">
                  <textarea
                    {...register("message")}
                    placeholder="Message"
                    name="message"
                    className="field mess"
                  />
                  <p>{data}</p>
                </div>
                <button type="submit">Send Message</button>
                   <input type="submit" className="primary-button" /> */}
              </form>
            </div>
            <br />
            <br />
          </div>
        </div>

        <div className="Book-section">
          <div className="Book-Container">
            <h1 className="primary-heading-2 email-Container">
              {" "}
              <br />
              <br />
              Contact Details{" "}
            </h1>
            <h3 className="  email-Container">Address</h3>
          </div>
          <div className="work-section-bottom">
            {BookData.map((data) => (
              <div className="work-section-info">
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="Book-section">
          <div className="email-Container">
            <h1>
              {" "}
              <br />
              <br />
              Email{" "}
            </h1>
            <div className="email-Container">
              <p>
                CEO: ceo@yournumberguaranteed.com <br />
                Editor: editor@yournumberguaranteed.com
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Escalade;
