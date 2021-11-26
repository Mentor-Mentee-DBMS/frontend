import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

function Feedback() {
    return <Feedback1>
    <div className="rectangle">
    <div><Link to="/"><FaArrowLeft className="arrow"/></Link></div>
    <h2>Feedback</h2>
        <form>
            <div>
            <label className="label1">Name:</label>
            <input className="input1" type='text'/>
            </div>
            <div>
            <label className="label2">Email:</label>
            <input className="input2" type="email"/>
            </div>
            <div>
            <label className="label3">Your Feedback:</label>
            <textarea className="input3" type='text'/>
            </div>
            <button className="submit"><Link className="linksubmit" to='/'>SUBMIT</Link></button>
        </form>
    </div>
    </Feedback1>
}

const Feedback1 = styled.section`

.rectangle{
    height:400px;
     width:40%;
     background: white;
     -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
     -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
      box-shadow: 0 0 10px 10px var(--lightPurple);
     position:absolute;
     top:14%;
     left:30%;
     right:20%;
     h2{
        font-family:'tangerine',cursive;
        font-size:3rem;
        color:var(--purple);
        margin-top:5%;
     }
}
.arrow{
    font-size:2rem;
    position:absolute;
    left:-30%;
    top:-10%;
}
input{
    background:var(--lightPurple);
    border:none;
    border-radius:20px;
    padding:10px 35px;
    position:absolute;
    left:32%;
    right:32%;
}
.input1{
  top:32%;
}
.input2{
  top:49%;
}
.input3{
  top:66%;
}

label{
    font-family: 'Cabin', sans-serif;
    font-size:1.1rem;
    position:absolute;
    left:32%;
    
    font-weight:bold;
    color:var(--darkGrey);
}
.label1{
      top:24%;
}
.label2{
     top:42%;
}
.label3{
    top:60%;
}
textarea{
    background:var(--lightPurple);
    border:none;
    border-radius:20px;
    padding:10px 35px;
    position:absolute;
    left:32%;
    right:32%;
}
.submit{
     background:var(--purple);
     padding:15px 55px;
     border:none;
     border-radius:20px;
     position:absolute;
     top:84%;
     left:35%;
     &:hover{
        background-image: linear-gradient(to right, #8E7CC3 0%, #CAC5EB 51%);
     }
}
.linksubmit{
      color:white;
      font-weight:bold;
}
@media only screen and (max-width: 992px)
 {
     .rectangle{
         width:60%;
         left:20%;
         right:20%;
     }
    
 }
@media only screen and (max-width: 800px)
 {
     .rectangle{
         width:65%;
         left:17%;
         right:17%;
     }
     label{
        left:25%;
    }
textarea{
    left:25%;
    right:25%;
}
input{
    left:25%;
    right:25%;
}
.arrow{
    left:-20%;
}
 }
 @media only screen and (max-width: 600px)
 {
    label{
        left:20%;
    }
textarea{
    left:20%;
    right:20%;
}
input{
    left:20%;
    right:20%;
}
.submit{
    left:26%;
}
 }
 @media only screen and (max-width: 500px)
 {
     .rectangle{
         width:70%;
         left:15%;
         right:15%;
         top:25%;
         
     }
     label{
        left:17%;
    }
textarea{
    left:17%;
    right:17%;
}
input{
    left:17%;
    right:17%;
}
 }
 @media only screen and (max-width: 450px)
 {
    label{
        left:14%;
    }
textarea{
    left:14%;
    right:14%;
    padding:10px 25px;
}
input{
    left:14%;
    right:14%;
    padding:10px 25px;
}

 }
 @media only screen and (max-width: 400px)
 {
     .rectangle{
         width:80%;
         left:10%;
         right:10%;
         top:25%;
         
     }
     .arrow{
    left:-10%;
}
 }
 @media only screen and (max-width: 350px)
 {
    label{
        left:12%;
    }
textarea{
    left:12%;
    right:12%;
    padding:10px 20px;
}
input{
    left:12%;
    right:12%;
    padding:10px 20px;
}
.submit{
    left:20%;
}
 }
 @media only screen and (max-width: 300px)
 {
     .rectangle{
         width:90%;
         left:5%;
         right:5%;
         top:25%;
         
     }
     .arrow{
    left:-5%;
}
 }

`
export default Feedback
