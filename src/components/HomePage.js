import { Link } from "react-router-dom";
import React from "react";
import crop1 from "../assets/crop 1.png";
import crop2 from "../assets/crop 2.png";
import hero from "../assets/Rectangle 3.jpg";
import mento from "../assets/mento1.png";
import styled from "styled-components";

// import crop3 from '../assets/crop3.jpg'
// import crop4 from '../assets/crop4.jpg'

function HomePage() {
  return (
    <Home>
      <section>
        <div>
          {/* eslint-disable-next-line */}
          <img className="mento" src={mento} />
          <div className="text">
            {/* <h2 className="topic">Name</h2> */}
            <p className="para">
              Mentors are student-centred teachers,  
              <br />
              friends, or guides who assist young  
              <br />
              learners during transitional periods 
              <br/>
              and difficult academic times.
            </p>
            <button className="get_started_btn">
              <Link to="/FindMentor">
                <h4 className="h">Get Started</h4>
              </Link>
            </button>
          </div>
        </div>
        {/* eslint-disable-next-line */}
        <img className="container" src={hero} />
      </section>

      <section className="section2">
        <div className="rectangle">
          <div className="rectangle1">
            <div className="tee">
              <h2>Mentee</h2>
              <h5>Get guidance</h5>
              <button className="find">
                <Link className="link" to="/FindMentor">
                  FIND A MENTOR
                </Link>
              </button>
            </div>

            {/* eslint-disable-next-line */}
            <img className="plant" src={crop1} />
          </div>

          <div className="rectangle2">
            <div className="tor">
              <h2>Mentor</h2>
              <h5>Guide someone</h5>
              <button className="be">
                <Link className="link" to="/BeMentor">
                  BE A MENTOR
                </Link>
              </button>
            </div>
            {/* eslint-disable-next-line */}
            <img className="water" src={crop2} />
          </div>
        </div>
      </section>
    </Home>
  );
}
const Home = styled.section`
  .container {
    width: 100%;
    ${"" /* height:50%; */}
    height:610px;
    position: relative;
    margin-top: -8%;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mento {
    position: absolute;
    width: 35%;
    right: 5%;
    top: 30%;
  }
  .text {
    position: absolute;
    top: 40%;
    left: 10%;
  }
  .topic {
    font-family: "tangerine", cursive;
    font-size: 3rem;
    color: var(--purple);
  }
  .para {
    font-family: "Cabin", sans-serif;
    color: var(--darkGrey);
  }
  .get_started_btn {
    border: none;
    background-color: var(--purple);
    border-radius: 50px;
    padding: 3px 23px;
    margin-top: 2%;
    align-content: center;
    &:hover {
      background-image: linear-gradient(to right, #8e7cc3 0%, #cac5eb 51%);
    }
  }
  .h {
    color: white;
    font-family: "Cabin", sans-serif;
    margin-top: 9%;
    font-size: 1.1rem;
  }
  .section2 {
    margin-top: 20%;
  }
  .tee {
    margin-top: 35%;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 3rem;
      color: var(--darkGrey);
    }
    h5 {
      font-family: "Cabin", sans-serif;
      color: var(--line);
      margin-top: -4%;
    }
  }
  .tor {
    margin-top: 35%;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 3rem;
      color: var(--darkGrey);
    }
    h5 {
      font-family: "Cabin", sans-serif;
      color: var(--line);
      margin-top: -4%;
    }
  }
  .find {
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    background-color: var(--green);
    margin-top: 10%;
    &:hover {
      background-image: linear-gradient(
        to right,
        var(--lightGreen1) 30%,
        var(--lightGreen2) 100%
      );
    }
  }
  .be {
    border: none;
    border-radius: 20px;
    padding: 10px 30px;
    background-color: var(--orange);
    margin-top: 10%;
    &:hover {
      background-image: linear-gradient(
        to right,
        var(--lightOrange1) 0%,
        var(--lightOrange2) 51%,
        var(--lightOrange3) 100%
      );
    }
  }
  .link {
    font-family: "Cabin", sans-serif;
    font-size: 1rem;
    color: white;
    font-weight: bold;
  }
  .plant {
    margin-left: 80%;
    margin-top: -110%;

    height: 430px;
    z-index: -1;
  }
  .water {
    margin-left: -135%;
    margin-top: -115%;
    height: 480px;
    z-index: -1;
  }
  .mentee1 {
    border-radius: 50%;
  }
  .mentor1 {
    border-radius: 50%;
  }
  .rectangle {
    display: flex;
    justify-content: space-around;
  }
  .rectangle1 {
    width: 300px;
    height: 380px;
    z-index: 100;
    background-color: white;
    ${"" /* box-shadow: 10px 10px 5px var(--lightPurple); */}
    z-index:100;
    -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
    -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
    box-shadow: 0 0 10px 10px var(--lightPurple);
  }
  .rectangle2 {
    width: 300px;
    height: 380px;
    background-color: white;
    ${"" /* box-shadow: 10px 10px 5px var(--lightPurple); */}
    -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
    -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
    box-shadow: 0 0 10px 10px var(--lightPurple);
  }

  @media only screen and (max-width: 992px) {
    .container {
      width: 100%;

      height: 610px;
    }
    .mento {
      position: absolute;
      width: 40%;
      right: 5%;
      top: 30%;
    }

    .tee {
      margin-top: 35%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 3rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.8rem;
      }
    }
    .tor {
      margin-top: 35%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 3rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.8rem;
      }
    }

    .plant {
      margin-left: 80%;
      margin-top: -120%;
      height: 400px;
    }
    .water {
      margin-left: -150%;
      margin-top: -115%;
      height: 420px;
    }
    .rectangle {
      display: flex;
      justify-content: space-around;
    }
    .rectangle1 {
      width: 250px;
      height: 350px;
    }
    .rectangle2 {
      width: 250px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 850px) {
    .plant {
      margin-left: 80%;
      margin-top: -120%;
      height: 350px;
    }
    .water {
      margin-left: -132%;
      margin-top: -120%;
      height: 370px;
    }
    .rectangle {
      display: flex;
      justify-content: space-around;
    }
    .rectangle1 {
      width: 240px;
      height: 320px;
    }
    .rectangle2 {
      width: 240px;
      height: 320px;
    }
  }
  @media only screen and (max-width: 768px) {
    .text {
      top: 40%;
    }
    .mento {
      top: 37%;
    }
  }
  @media only screen and (max-width: 700px) {
    .plant {
      margin-left: -134%;
      margin-top: -120%;
      height: 400px;
    }
    .water {
      margin-left: 65%;
      margin-top: -126%;
      height: 420px;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 250px;
      height: 350px;
      margin-top: 25%;
    }
    .rectangle2 {
      width: 250px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 550px) {
    .container {
      width: 100%;
      height: 700px;
      position: relative;
    }
    .mento {
      position: absolute;
      align-content: center;
      width: 60%;
      right: 5%;
      left: 20%;
      top: 20%;
    }
    .text {
      position: absolute;
      top: 70%;
      left: 27%;
      right: 27%;
      align-content: center;
    }
    .topic {
      font-size: 2.1rem;
    }
    .para {
      font-size: 0.8rem;
    }

    .h {
      font-size: 0.8rem;
    }
    .plant {
      margin-left: -134%;
      margin-top: -120%;
      height: 340px;
    }
    .water {
      margin-left: 65%;
      margin-top: -126%;
      height: 390px;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 230px;
      height: 320px;
    }
    .rectangle2 {
      width: 230px;
      height: 320px;
    }
  }

  @media only screen and (max-width: 444px) {
    .text {
      position: absolute;
      top: 60%;
      left: 27%;
      right: 27%;
      align-content: center;
    }
    .topic {
      font-size: 2rem;
    }
    .para {
      font-size: 0.7rem;
    }

    .h {
      color: white;
      font-family: "Cabin", sans-serif;
      font-size: 0.6rem;
    }
    .tor {
      h5 {
        font-size: 0.7rem;
      }
    }
    .tee {
      h5 {
        font-size: 0.7rem;
      }
    }
    .plant {
      margin-left: -140%;
      margin-top: -120%;
      height: 310px;
    }
    .water {
      margin-left: 70%;
      margin-top: -126%;
      height: 330px;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 200px;
      height: 300px;
    }
    .rectangle2 {
      width: 200px;
      height: 300px;
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      width: 100%;
      height: 650px;
      position: relative;
      margin-top: -8%;
      z-index: -1;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .mento {
      position: absolute;
      align-content: center;
      width: 70%;
      right: 5%;
      left: 20%;
      top: 25%;
    }
    .text {
      position: absolute;
      left: 27%;
      right: 27%;
      top: 68%;
      align-content: center;
    }
    .topic {
      font-family: "tangerine", cursive;
      font-size: 1.9rem;
      color: var(--purple);
    }
    .para {
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
      font-size: 0.6rem;
    }

    .h {
      color: white;
      font-family: "Cabin", sans-serif;
      font-size: 0.6rem;
    }
  }

  @media only screen and (max-width: 380px) {
    .text {
      position: absolute;
      top: 64%;
      left: 27%;
      right: 27%;
      align-content: center;
    }
    .topic {
      font-family: "tangerine", cursive;
      font-size: 2rem;
      color: var(--purple);
    }
    .para {
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
      font-size: 0.6rem;
    }
    .h {
      color: white;
      font-family: "Cabin", sans-serif;
      font-size: 0.6rem;
    }
    .section2 {
      margin-top: 20%;
    }
    .tee {
      margin-top: 35%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2.5rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.6rem;
      }
    }
    .tor {
      margin-top: 35%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2.5rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.6rem;
      }
    }
    .find {
      border: none;
      border-radius: 20px;
      padding: 8px 10px;
      background-color: var(--green);
      margin-top: 10%;
    }
    .be {
      border: none;
      border-radius: 20px;
      padding: 8px 15px;
      background-color: var(--orange);
      margin-top: 10%;
    }
    .link {
      font-family: "Cabin", sans-serif;
      font-size: 0.9rem;
      color: white;
      font-weight: bold;
    }
    .plant {
      margin-left: -140%;
      margin-top: -120%;
      height: 300px;
      z-index: -3;
    }
    .water {
      margin-left: 69%;
      margin-top: -126%;
      height: 320px;
      z-index: -1;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 180px;
      height: 290px;
    }
    .rectangle2 {
      width: 180px;
      height: 290px;
      margin-top: 25%;
    }
  }

  @media only screen and (max-width: 360px) {
    .section2 {
      margin-top: 20%;
    }
    .tor {
      h5 {
        font-size: 0.56rem;
      }
    }
    .tee {
      h5 {
        font-size: 0.56rem;
      }
    }
    .plant {
      margin-left: -150%;
      margin-top: -120%;
      height: 290px;
      z-index: -3;
    }
    .water {
      margin-left: 70%;
      margin-top: -126%;
      height: 300px;
      z-index: -1;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 160px;
      height: 290px;
    }
    .rectangle2 {
      width: 160px;
      height: 290px;
      margin-top: 25%;
    }
  }

  @media only screen and (max-width: 330px) {
    .section2 {
      margin-top: 20%;
    }

    .plant {
      margin-left: -150%;
      margin-top: -120%;
      height: 260px;
      z-index: -3;
    }
    .water {
      margin-left: 70%;
      margin-top: -126%;
      height: 280px;
      z-index: -1;
    }
    .text {
      margin-top: -10%;
    }
    .para {
      font-size: 0.5rem;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 150px;
      height: 270px;
    }
    .rectangle2 {
      width: 150px;
      height: 270px;
      margin-top: 25%;
    }
  }
  @media only screen and (max-width: 318px) {
    .section2 {
      margin-top: 20%;
    }
    .tee {
      margin-top: 28%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2.5rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.5rem;
      }
    }
    .tor {
      margin-top: 28%;
      h2 {
        font-family: "tangerine", cursive;
        font-size: 2.5rem;
        color: var(--darkGrey);
      }
      h5 {
        font-family: "Cabin", sans-serif;
        color: var(--line);
        margin-top: -4%;
        font-size: 0.5rem;
      }
    }
    .find {
      border: none;
      border-radius: 20px;
      padding: 8px 10px;
      background-color: var(--green);
      margin-top: 10%;
    }
    .be {
      border: none;
      border-radius: 20px;
      padding: 8px 15px;
      background-color: var(--orange);
      margin-top: 10%;
    }
    .link {
      font-family: "Cabin", sans-serif;
      font-size: 0.8rem;
      color: white;
      font-weight: bold;
    }
    .plant {
      margin-left: -150%;
      margin-top: -130%;
      height: 250px;
      z-index: -3;
    }
    .water {
      margin-left: 70%;
      margin-top: -134%;
      height: 255px;
      z-index: -1;
    }
    .rectangle {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-content: center;
      margin-left: 27%;
      margin-right: 27%;
    }
    .rectangle1 {
      width: 140px;
      height: 220px;
    }
    .rectangle2 {
      width: 140px;
      height: 220px;
      margin-top: 25%;
    }
  }
  @media only screen and (max-width: 280px) {
    .tee {
      h5 {
        font-size: 0.4rem;
      }
    }
    .tor {
      h5 {
        font-size: 0.4rem;
      }
    }
    .plant {
      margin-left: -148%;
      margin-top: -130%;
      height: 250px;
      z-index: -3;
    }
    .water {
      margin-left: 65%;
      margin-top: -134%;
      height: 255px;
      z-index: -1;
    }
  }

`;

export default HomePage;
