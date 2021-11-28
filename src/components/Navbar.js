import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MentorLogin } from "../components";
import React from "react";
import { links } from "../utils/constants";
import styled from "styled-components";
import { useMMContext } from "../context/MM_context";

// import MentorLogin from './MentorLogin'

const Nav = () => {
  const { openSidebar } = useMMContext();

  return (
    <NavContainer>
      <div classname="nav-center">
        <div className="color">
          <Link to="/">
            <h1 className="heading">MentorCare</h1>
          </Link>
        </div>
        <div className="nav-header">
          <div className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </div>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>

        <MentorLogin />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  ${
    "" /* .MM-btn-wrapper{
  display:flex;
  justify-content:space-around;
  position:absolute;
  top:5%;
  right:5%;
} */
  }
  ${
    "" /* .mLogin{
  position:absolute;
 top:6%;
 right:20%;
 }
 .mentee{
   position:absolute;
   top:5%;
   right:5%;
 } */
  }
 .mLogin {
    position: absolute;
    right: 20%;
    top: 6.5%;
  }
  .mentee {
    position: absolute;
    right: 4%;
    top: 5.5%;
  }

  .heading {
    position: absolute;
    left: 2%;
    top: 1%;
    font-family: "Tangerine", cursive;
    font-size: 4rem;
    color: var(--darkGrey);
    z-index: 1;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8vh;
  }

  .nav-header {
    font-family: "Tangerine", cursive;
    padding: 0;
    margin-left: 1rem;
    margin-top: 1rem;
    z-index: 1;
    opacity: 1;
    margin-bottom: 5%;
    animation: scale 1s forwards;
  }
  .nav-toggle {
    svg {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 2.5rem;
      cursor: pointer;
      color: var(--heading);
    }
  }
  .nav-links {
    display: none;
  }

  @media (max-width: 992px) {
    .MM-btn-wrapper {
      display: none;
    }
  }

  @media (max-width: 586px) {
    .nav-toggle {
      svg {
        display: block;
        position: absolute;
        top: 0;
        right: -3%;
        transform: translate(-100%, 60%);
        font-size: 2.5rem;
        cursor: pointer;
        color: var(--heading);
      }
    }
  }
  @media (max-width: 420px) {
    .nav-toggle {
      svg {
        display: block;
        position: absolute;
        top: 1%;
        right: -8%;
        transform: translate(-100%, 60%);
        font-size: 2.3rem;
        cursor: pointer;
        color: var(--heading);
      }
    }
  }
  @media (max-width: 300px) {
    .nav-toggle {
      svg {
        display: block;
        position: absolute;
        top: 0;
        right: -10%;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: var(--heading);
      }
    }
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .heading {
      position: absolute;
      left: 2%;
      top: 1%;
      font-family: "Tangerine", cursive;
      font-size: 5rem;
      color: var(--darkGrey);
      z-index: 1;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-header {
      margin: 1rem;
      ${"" /* margin-bottom:10%; */}
      z-index:1;
      .heading {
        font-size: 5rem;
        margin-top: -10%;
      }
    }

    .nav-links {
      position: absolute;
      top: 1.9rem;
      display: flex;
      justify-content: space-around;
      width: 30%;
      margin-left: 30%;
      font-weight: normal;
      ${"" /* margin-top:-10.5rem; */}

      z-index: 1;
      font-weight: bold;
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--heading);
        }
      }
      li {
        &:hover {
          color: var(--circle1);
        }
      }
    }
  }
`;

export default Nav;
