import { Navbar, Sidebar } from "../components";

import React from "react";
import styled from "styled-components";

function About() {
  return (
    <About1>
      <Navbar />
      <Sidebar />

      <section>
        <div className="rectangle">
          <div className="Abouttext">
            <h2>About</h2>
            <p>
              This mentor-mentee program was initiated to obtain a realistic
              assessment of a learner's performance as well as to provide room
              for effective learning and the skilled development of the
              student's community. The mentors provide guidance, knowledge,
              experience, and expertise to help their mentees achieve their full
              potential. Mentoring is a trusting, sincere, and private
              relationship between a mentor and a student mentee. Throughout
              their institutional learning, the mentors serve as dependable
              guides, acting as both a friend and a teacher.
            </p>
          </div>
        </div>
      </section>
    </About1>
  );
}

const About1 = styled.section`
  .rectangle {
    height: 400px;
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
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 10%;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 3rem;
      color: var(--purple);
    }
    p {
      margin-top: 4%;
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
      font-size:0.9rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .rectangle {
      width: 60%;
      left: 20%;
    }
    .Abouttext {
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 10%;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 3rem;
      color: var(--purple);
    }
    p {
      margin-top: 4%;
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
    }
  }
  }

  @media only screen and (max-width: 800px) {
    .rectangle {
      width: 60%;
      left: 20%;
    }
    .Abouttext {
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 10%;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 2.5rem;
      color: var(--purple);
    }
    p {
      margin-top: 4%;
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
    }
  }
  }
  @media only screen and (max-width: 500px) {
    .rectangle {
      width: 65%;
      left: 17%;
      top: 25%;
    }
    .Abouttext {
      margin-top: 3%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2.2rem;
        color: var(--purple);
      }
      p {
        margin-top: 1%;
        font-size: 0.7rem;
        font-family: "Cabin", sans-serif;
        color: var(--darkGrey);
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .rectangle {
      width: 80%;
      left: 10%;
    }
    .Abouttext {
      margin-top: 3%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2rem;
        color: var(--purple);
      }
      p {
        margin-top: 1%;
        font-size: 0.7rem;
        font-family: "Cabin", sans-serif;
        color: var(--darkGrey);
      }
    }
  }
  @media only screen and (max-width: 330px) {
    .Abouttext {
      margin-top: 3%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2rem;
        color: var(--purple);
      }
      p {
        margin-top: 4%;
        font-size: 0.7rem;
        font-family: "Cabin", sans-serif;
        color: var(--darkGrey);
      }
    }
  }
`;

export default About;
