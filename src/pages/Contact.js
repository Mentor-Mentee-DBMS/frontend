import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { Navbar, Sidebar } from "../components";

import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Contact1>
      <Navbar />
      <Sidebar />
      <section className="rect">
        <div className="rectangle">
          <div className="Abouttext">
            <h1>Contact Us</h1>
            <div>
              <FaRegEnvelope className="icons" /> <br />
              <br />
              <p className="contact1">
                <a className="contact1" href="mailto:bhatrohin003@gmail.com">
                  bhatrohin003@gmail.com
                </a>
              </p>
              <p className="contact1">
                <a className="contact1" href="mailto:rajnandiniab@gmail.com">
                  rajnandiniab@gmail.com
                </a>
              </p>
              <br />
              <FaPhoneAlt className="icons" />
              <br />
              <br />
              <p className="phone1">
                Rohin Bhatt - 9146458797 <br />
                Rajnandini Baheti - 9307960515
              </p>
              {/* <div className="icons-down">
                <FaLinkedin className="ic" />
                <FaFacebook className="ic" />
                <FaInstagram className="ic" />
                <FaTwitter className="ic" />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Contact1>
  );
}

const Contact1 = styled.section`
  .rectangle {
    height: 360px;
    width: 40%;
    background: white;
    -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
    -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
    box-shadow: 0 0 10px 10px var(--lightPurple);
    position: absolute;
    top: 20%;
    left: 30%;
  }
  .Abouttext {
    margin-top: 10%;
    h1 {
      font-family: "tangerine", cursive;
      font-size: 3rem;
      color: var(--purple);
      margin-top: -8%;
    }
    a {
      font-family: "Cabin", sans-serif;
      font-size: 1rem;
      margin-top: -3%;
      color:var(--prussian);
    }
  }
  .icons {
    color: #674ea7;
    font-size: 1.3rem;
    margin-top: 1%;
    &:hover {
      font-size: 1.5rem;
      color: var(--purple);
    }
  }
  .phone1{
    margin-top:-3%;
  }
  .ic {
    color: #674ea7;
    font-size: 1.3rem;
    margin-top: 7%;
    margin-left: 3%;
    &:hover {
      font-size: 1.5rem;
      color: var(--purple);
    }
  }

  @media only screen and (max-width: 800px) {
    .rectangle {
      width: 60%;
      left: 20%;
    }
  }
  @media only screen and (max-width: 500px) {
    .rectangle {
      width: 65%;
      left: 17%;
      top: 25%;
    }
  }
  @media only screen and (max-width: 400px) {
    .rectangle {
      width: 80%;
      left: 10%;
    }
  }
`;

export default Contact;
