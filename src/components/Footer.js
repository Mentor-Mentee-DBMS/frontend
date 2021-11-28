// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaRegEnvelope,
//   FaTwitter,
// } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <section className="footer">
        <div className="footer-rect">
          {/* <div>
            <ul className="social-icons">
              <li>
                <a href="https://in.linkedin.com/">
                  <FaLinkedin className="linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebook className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en">
                  <FaTwitter className="twitter" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en">
                  <FaRegEnvelope className="mail" />
                </a>
              </li>
            </ul>
          </div> */}

          <div className="what">
            <h1>MentorCare</h1>
            <p>
              Advice is like snow, the softer it falls, the longer it dwells
              upon, and the deeper it sinks into the mind.
            </p>
          </div>

          <div className="feedback-rect">
            <Link to="/about">
              <h4 className="about">About</h4>
            </Link>
            <Link to="/feedback">
              <h4 className="feed">Feedback</h4>
            </Link>
          </div>
        </div>
      </section>
    </Foot>
  );
}

const Foot = styled.section`
  .footer {
    margin-top: 10%;
  }
  .footer-rect {
    width: 100%;
    ${
      "" /* background-image: linear-gradient(to bottom,#CAC5EB,#F0F6FF,#FBFAFF); */
    }
    ${"" /* margin-top:30%; */}
    background-image: linear-gradient(to bottom,#EFF6FF,#FCFBFF);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${
    "" /*.social-icons {
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    margin-left: 75%;
    margin-top: 65%;
    a {
      color: #674ea7;
      &:hover {
        color: var(--prussian);
        font-size: 2rem;
      }
    }
  }*/
  }
  .what {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;
    align-content: center;
    h1 {
      font-family: "Tangerine", cursive;
      font-size: 5rem;
      background-clip: text;
      background: -webkit-linear-gradient(
        90deg,
        rgb(103, 78, 167),
        rgb(202, 197, 235)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
      font-size: 1rem;
    }
  }
  .feedback-rect {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 20%;
    margin-bottom: 2%;
  }
  .feedback {
    h4 {
      font-family: "Cabin", sans-serif;
      font-size: 1.2rem;
      color: #674ea7;
      text-align: center;
    }
  }
  .about {
    margin-top: 1rem;
    &:hover {
      color: var(--purple);
    }
  }
  .feed {
    margin-top: 1rem;
    &:hover {
      color: var(--purple);
    }
  }

  @media only screen and (max-width: 600px) {
    .what {
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .footer-rect {
      flex-direction: column;
    }
    .social-icons {
      flex-direction: row;
      margin-left: 32%;
      ${"" /* margin-right:32%; */}
      margin-top:3%;
    }
    .what {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
    .feedback {
      h4 {
        font-family: "Cabin", sans-serif;
        font-size: 0.8rem;
        color: #674ea7;

        margin-left: -3%;
      }
    }
    .about {
      margin-top: 5%;
    }
    .feed {
      margin-top: 5%;
    }
  }
`;
export default Footer;
