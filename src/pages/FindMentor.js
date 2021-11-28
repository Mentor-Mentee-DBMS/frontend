import { Navbar, Sidebar } from "../components";
import React, { useState } from "react";

import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FindMentor() {
  const [state, setState] = useState({
    profileImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwaLDKaK49tsHmdMGOrmTdns5qiw080F2Yw&usqp=CAU",
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const { profileImg } = state;

  // const history = useHistory()

  return (
    <Find>
      <Navbar />
      <Sidebar />
      <section className="findMentor">
        <div className="rectangleFind">
          <h2>Find A Mentor</h2>
          <div className="parts">
            <div className="circle">
              <div className="img-holder">
                {/* eslint-disable-next-line */}
                <img src={profileImg} id="img" className="profile-img" />
                <div className="camcircle"></div>
              </div>
              <input
                className="profile-input"
                type="file"
                name="image-upload"
                id="input"
                accept="image/*"
                onChange={imageHandler}
              />
              <div className="addp">
                <label htmlFor="input" className="img-upload">
                  {" "}
                  <FaCamera className="camera" />
                </label>
              </div>
            </div>

            <div classname="information">
              <label className="yourname" for="name">
                Name:
              </label>
              <input
                className="style"
                type="text"
                id="name"
                name="name"

                // onChange={(e)=>setName(e.target.value)}
              />{" "}
              <br />
              <label className="mail" for="email">
                Email:
              </label>
              <input
                className="style"
                type="email"
                name="email"
                placeholder="mentee@gmail.com"
                // value={email}
                // onChange={(e)=>setEmail(e.target.value)}
              />{" "}
              <br />
              <label className="contactNumber" for="contact">
                Phone No.:
              </label>
              <input
                className="style"
                type="number"
                id="contact-number"
                name="contact-number"
                // value={phone}
                // onChange={(e)=>setPhone(e.target.value)}
              />{" "}
              <br />
              <label className="birthday" for="birthday">
                DOB:
              </label>
              <input
                className="style"
                type="date"
                id="birthday"
                name="birthday"
                // value={phone}
                // onChange={(e)=>setPhone(e.target.value)}
              />{" "}
              <br />
              <label className="address" for="address">
                Address:
              </label>
              <textarea
                className="style1"
                type="text"
                id="address"
                name="address"
                // value={address}
                // onChange={(e)=>setAddress(e.target.value)}
              />{" "}
              <br />
              <label className="url" for="url">
                Linkedin Url:
              </label>
              <input
                className="style"
                type="text"
                id="url"
                name="url"
                // value={url}
                // onChange={(e)=>setUrl(e.target.value)}
              />{" "}
              <br />
              <label className="bio" for="bio">
                About/Bio:
              </label>
              <textarea
                className="style1"
                type="text"
                id="bio"
                name="bio"
                //  value={bio}
                //  onChange={(e)=>setBio(e.target.value)}
              />{" "}
              <br />
              <label className="institute" for="institute-name">
                Institute Name:
              </label>
              <input
                className="style"
                type="text"
                id="school"
                name="school"
                //  value={school}
                //  onChange={(e)=>setSchool(e.target.value)}
              />{" "}
              <br />
              {/* <label className="college" for="college-name">
                College Name:
              </label>
              <input
                className="style"
                type="text"
                id="college"
                name="college"
                //  value={college}
                //  onChange={(e)=>setCollege(e.target.value)}
              />{" "}
              <br /> */}
              <label className="education" for="education">
                Qualification:
              </label>
              <textarea
                className="style1"
                type="text"
                id="education"
                name="education"
                //  value={education}
                //  onChange={(e)=>setEducation(e.target.value)}
              />{" "}
              <br />
              <label className="domains" for="domains">
                {" "}
                Domains:
              </label>
              <textarea
                className="style1"
                type="text"
                id="domains"
                name="domains"
                //  value={domains}
                //  onChange={(e)=>setDomains(e.target.value)}
              />{" "}
              <br />
            </div>
          </div>
          <div className="click">
            <button className="submitBtn">
              <Link className="submit" to="/searchMentor">
                SUBMIT
              </Link>
            </button>
          </div>
        </div>
      </section>
    </Find>
  );
}

const Find = styled.section`
  .rectangleFind {
    position: absolute;
    background-color: white;
    height: 1480px;
    width: 90%;
    align-content: center;
    margin-left: 5%;
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center;
    -webkit-box-shadow: 0 0 10px 10px #dcffcc;
    -moz-box-shadow: 0 0 10px 10px #dcffcc;
    box-shadow: 0 0 10px 10px #dcffcc;
    h2 {
      font-family: "tangerine", cursive;
      font-size: 3.8rem;
      padding-top: 2rem;
      color: var(--darkGrey);
    }
  }
  .profile-img {
    position: relative;
    z-index: 0;
    height: 250px;
    width: 250px;
    margin-bottom: 40%;
    border-radius: 50%;
  }
  #input[type="file"] {
    display: none;
  }
  .camcircle {
    position: relative;
    z-index: 2;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: var(--lightGreen2);
    margin-top: -80%;
    margin-left: 77%;
  }
  .addp {
    margin-top: -20%;
    margin-left: 80%;
  }
  .camera {
    font-size: 2rem;
    position: relative;
    z-index: 4;
    &:hover {
      font-size: 2.3rem;
    }
  }
  .parts {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-around;
    margin-top: 7%;
  }
  label {
    font-family: "Cabin", sans-serif;
    color: var(--darkGrey);
    font-size: 1.3rem;
    letter-spacing: 1.3px;
  }
  .style {
    width: 90%;
    height: 30px;
    border-radius: 20px;
    border: none;
    background-color: #eaeaea;
    text-align: center;
    margin-bottom: 4%;
    font-size: 1rem;
    font-family: "Cabin", sans-serif;
    color: var(--lightGrey);
  }
  .style:focus {
    outline: none;
  }
  .style1 {
    width: 90%;
    height: 60px;
    border-radius: 20px;
    border: none;
    background-color: #eaeaea;
    text-align: center;
    margin-bottom: 4%;
    font-size: 1rem;
    font-family: "Cabin", sans-serif;
    color: var(--lightGrey);
  }
  .style1:focus {
    outline: none;
  }
  .yourname {
    margin-right: 64%;
  }
  .mail {
    margin-right: 64%;
  }
  .contactNumber {
    margin-right: 53%;
  }
  .birthday {
    margin-right: 68%;
  }
  .address {
    margin-right: 60%;
  }
  .url {
    margin-right: 50%;
  }
  .bio {
    margin-right: 55%;
  }
  .institute {
    margin-right: 40%;
  }
  .college {
    margin-right: 43%;
  }
  .education {
    margin-right: 44%;
  }
  .domains {
    margin-right: 55%;
  }
  .click {
    margin-top: 10%;
  }
  .submitBtn {
    border: none;
    width: 170px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--lightGreen1);

    &:hover {
      background-color: var(--lightGreen2);
    }
  }
  .submit {
    font-size: 2rem;
    font-family: "Cabin", sans-serif;
    color: var(--darkGrey);
    font-weight: bolder;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    .rectangleFind {
      margin-top: 15%;
    }
    .profile-img {
      position: relative;
      z-index: 0;
      height: 210px;
      width: 210px;
      margin-bottom: 39%;
      border-radius: 50%;
    }
    .camcircle {
      width: 55px;
      height: 55px;
      margin-top: -74%;
      margin-left: 80%;
    }
    .addp {
      margin-top: -20%;
      margin-left: 86%;
    }
    .camera {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 430px) {
    .rectangleFind {
      margin-top: 20%;
      h2 {
        font-size: 2.8rem;
      }
    }
  }
  @media (max-width: 360px) {
    .rectangleFind {
      margin-top: 30%;
      h2 {
        font-size: 2.4rem;
      }
    }
  }
  @media (max-width: 350px) {
    .rectangleFind {
      width: 95%;
      margin-left: 2.5%;
      margin-top: 30%;
      h2 {
        font-size: 2.4rem;
      }
    }
    .label {
      font-size: 0.9rem;
    }
    .contactNumber {
      margin-right: 47%;
    }

    .address {
      margin-right: 55%;
    }
    .url {
      margin-right: 40%;
    }
    .bio {
      margin-right: 45%;
    }
    .institute {
      margin-right: 35%;
    }
    .college {
      margin-right: 33%;
    }
    .education {
      margin-right: 34%;
    }
    .domains {
      margin-right: 50%;
    }
    .click {
      margin-top: 10%;
    }
    .submitBtn {
      border: none;
      width: 130px;
      height: 45px;
      border-radius: 50px;
    }
    .submit {
      font-size: 1.3rem;
      font-family: "Cabin", sans-serif;
      color: var(--darkGrey);
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

export default FindMentor;
