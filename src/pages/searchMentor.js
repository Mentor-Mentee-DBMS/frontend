import { Navbar, Sidebar } from "../components";

import { FaSearch } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

function searchMentor() {
  return (
    <Search>
      <Navbar />
      <Sidebar />
      <div className="mentorsearch">
        <form id="form" role="search">
          <input
            className="searchbar"
            type="search"
            id="query"
            name="query"
            placeholder="Search Mentor"
          />
          <button className="Searchbtn">
            <FaSearch className="searchicon" />
          </button>
        </form>
      </div>
    </Search>
  );
}

const Search = styled.section`
  .mentorsearch {
    margin-top: 10%;
  }
  .searchbar {
    width: 50%;
    height: 30px;
    border-radius: 2px;
    border: none;
    background-color: var(--lightPurple);
    text-align: center;
    margin-bottom: 4%;
    font-size: 1rem;
    font-family: "Cabin", sans-serif;
    color: var(--lightGrey);
  }
  .Searchbtn {
    padding: 6px 15px;
    background: var(--purple);
    border: none;
    color: white;
  }
  .searchicon {
    font-size: 1rem;
  }
`;

export default searchMentor;
