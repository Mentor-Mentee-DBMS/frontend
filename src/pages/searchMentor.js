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

  .Searchbtn{
    padding:6px 15px;
    background:var(--purple);
    border:none;
    color:white;
}
.searchicon{
    font-size:1rem;
}

@media only screen and (max-width: 800px)
{
    .mentorsearch{
    margin-top:15%;
}
.searchbar{
    width:60%;
}
}

@media only screen and (max-width: 600px)
{
    .mentorsearch{
    margin-top:20%;
}
.searchbar{
    width:70%;
}
}
@media only screen and (max-width: 480px)
{
    .mentorsearch{
    margin-top:25%;
}
.searchbar{
    width:75%;
}
}

@media only screen and (max-width: 380px)
{
    .mentorsearch{
    margin-top:30%;
}
.searchbar{
    width:80%;
}
}
@media only screen and (max-width: 300px)
{
    .mentorsearch{
    margin-top:36%;
}
.searchbar{
    width:80%;
}
}

@media only screen and (max-width: 290px)
{
  .Searchbtn {
    padding: 6px 15px;
    background: var(--purple);
    border: none;
    color: white;
  }
  .searchicon {
    font-size: 1rem;
  }
}
`;

export default searchMentor;
