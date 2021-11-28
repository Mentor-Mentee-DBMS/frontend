import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { useMMContext } from "../context/MM_context";

const MentorLogin = () => {
  const { closeSidebar } = useMMContext();

  return (
    <Wrapper>
      <div className="MM-btn-wrapper">
        <Link to="/MentorLogin" className="mentor-btn" onClick={closeSidebar}>
          <h4 className="mLogin">MENTOR LOGIN</h4>
        </Link>
        <Link to="/MenteeLogin" onClick={closeSidebar}>
          {/* <button className="mentee" > */}
          <h4 className="mentee">MENTEE LOGIN</h4>
          {/* </button> */}
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .mentee {
    border: none;
    border-radius: 20px;
    background-color: var(--lightPurple);
    padding: 6px 12px;
    font-size: 1rem;
    font-weight: bold;
    color: var(--purple);

    ${
      "" /* position:relative;
     float:right;
     margin-right:-24%;
     margin-top:0.6%; */
    }
  }
  .mLogin {
    font-size: 1rem;
    color: var(--prussian);
    ${
      "" /* position:relative;
     float:right;
     margin-right:15%;
     margin-top:1%; */
    }
  }

  ${
    "" /* @media only screen and (max-width: 980px)
  {
  .MM-btn-wrapper
  {
        display:none;
  }
  
  } */
  }
`;
export default MentorLogin;
