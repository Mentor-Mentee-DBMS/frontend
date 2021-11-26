import React from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, Footer,MentorLogin } from '../components'


function About() {
    return <About1>
    <Navbar/>
    <Sidebar/>
  
    
        <section>
        
        <div className="rectangle">
        <div className="Abouttext">
             <h2>About</h2>
             <p>Lorem Ipsum is simply dummy text of <br/>
             the printing and typesetting industry. Lorem <br/>
             Ipsum has been the industry's standard <br/>
             dummy text ever since the 1500s, when an <br/>
             unknown printer took a galley of type and <br/>
             scrambled it to make a type specimen book. <br/>
             It has survived not only five centuries, but<br/>
              also the leap into electronic typesetting, <br/>
              remaining essentially unchanged.</p>
        </div>
        </div>
        
        </section>
      
    </About1>
}

const About1 = styled.section`

 .rectangle{
     height:400px;
     width:40%;
     background: white;
     -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
     -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
      box-shadow: 0 0 10px 10px var(--lightPurple);
     position:absolute;
     top:20%;
     left:30%;
 }
 .Abouttext{
     margin-top:10%;
     h2{
        font-family:'tangerine',cursive;
        font-size:3rem;
        color:var(--purple);
     }
     p{
         margin-top:6%;
         font-family: 'Cabin', sans-serif;
         color:var(--darkGrey);
     }
 }

 @media only screen and (max-width: 800px)
 {
     .rectangle{
         width:60%;
         left:20%;
     }
 }
 @media only screen and (max-width: 500px)
 {
     .rectangle{
         width:65%;
         left:17%;
         top:25%;
         
     }
     .Abouttext{
     margin-top:10%;
     h2{
        font-family:'tangerine',cursive;
        font-size:2.5rem;
        color:var(--purple);
     }
     p{
         margin-top:6%;
         font-size:0.9rem;
         font-family: 'Cabin', sans-serif;
         color:var(--darkGrey);
     }
 }
 }
 @media only screen and (max-width: 400px)
 {
     .rectangle{
         width:80%;
         left:10%;
     }
 }
 @media only screen and (max-width: 330px)
 {
    .Abouttext{
     margin-top:20%;
     h2{
        font-family:'tangerine',cursive;
        font-size:2.2rem;
        color:var(--purple);
     }
     p{
         margin-top:6%;
         font-size:0.7rem;
         font-family: 'Cabin', sans-serif;
         color:var(--darkGrey);
     }
 }
 }
`

export default About
