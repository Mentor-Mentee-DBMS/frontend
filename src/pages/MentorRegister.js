import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import hero from "../assets/Rectangle 3.jpg";
import mentor from "../assets/mentorMentee11.png";
import styled from "styled-components";

function MentorRegister() {
  return (
    <MentorWrapper>
      <section className="menteeL">
        <div>
          <div className="both">
            {/* eslint-disable-next-line */}
            <img className="LoginImage" src={mentor} />
            <div className="LoginRect">
              <div>
                <Link to="/">
                  <FaArrowLeft className="arrow" />
                </Link>
              </div>
              <h2 className="Lheading">MENTOR SIGN UP</h2>

              <form className="form1">
                <div className="name">
                  <label className="label3">Name: </label>
                  <input className="input3" type="text" />
                </div>
                <div className="email">
                  <label className="label1">E-mail: </label>
                  <input
                    className="input1"
                    type="email"
                    placeholder="xyz@gmail.com"
                  />
                </div>
                <div className="password">
                  <label className="label2">Password: </label>
                  <input className="input2" type="password" />
                </div>
                <div className="confirmpassword">
                  <label className="label4">
                    Confirm
                    <br />
                    Password:{" "}
                  </label>
                  <input className="input4" type="password" />
                </div>
                <button className="btnLogin">
                  <Link className="findlink" to="/BeMentor">
                    SIGNUP
                  </Link>
                </button>
              </form>
            </div>
          </div>

          {/* eslint-disable-next-line */}
          <img className="container" src={hero} />
        </div>
        <div className="signup">
          <h4>Already Registered?</h4>
          <button>
            <Link className="register" to="/MentorLogin">
              LOGIN
            </Link>
          </button>
        </div>
      </section>
    </MentorWrapper>
  );
}

const MentorWrapper = styled.section`

.container
{
   width:100%;
   height:800px;;
   position:relative;
   z-index:-1;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;      
}

.LoginRect{
    height:450px;
    width:400px;
    background:white;
    position:absolute;
    border-radius:20px;
    top:10%;
    left:5%;
    -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
    -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
    box-shadow: 0 0 10px 10px var(--lightPurple);
}
.arrow{
    font-size:2rem;
    position:absolute;
    left:-20%;
    top:-6%;
}
.LoginImage{
    
          position:absolute;
          display:block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          ${"" /* width:75%; */}
          width:60rem;
          height:80rem;
          right:3%;
          top:-9%;
        }
        .Lheading{
            font-family: 'Cabin', sans-serif;
            font-size:1.5rem;
            margin-top:7%;
            color:var(--prussian);
        }

        input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 35px;
            position:absolute;
            left:35%;
           
        }
        input:focus{
           border: none;
        }
        .input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1.1rem;
            position:absolute;
            left:5%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }
        .signup{
            position:absolute;
            right:15%;
            top:75%;
            h4{
                font-size:1.3rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 50px;
                background:var(--orange);
                border:none;
                border-radius:20px;
                &:hover{
                    background-image: linear-gradient(to right, var(--lightOrange1) 0%, var(--lightOrange2) 51%, var(--lightOrange3) 100%);
                }
               
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }
           
        }

 @media only screen and (max-width: 992px)
{
   .LoginRect{
    height:450px;
    width:350px;
}
   .LoginImage{
     width:60rem;
     height:70rem;
     
     top:-9%;
}

.Lheading{
            font-size:1.5rem;
        }
        input{
            padding:10px 35px;
            position:absolute;
            left:28%;
        }
        .input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1.1rem;
            position:absolute;
            left:5%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }
        ${
          "" /* .input1{
             top:32%;
        }
        .input2{
             top:47%;
        }
        label{
            
            font-size:1rem;
            position:absolute;
            left:5%;
            
        }
        .label1{
            top:33%; 
        }
        .label2{
            top:48%;
        }
        .btnLogin{
            position:absolute;
            top:73%;
            left:25%;
            right:25%;
            padding:15px 60px;
        } */
        }
        ${
          "" /* .findlink{
            font-size:1rem;
        } */
        }

}

@media only screen and (max-width: 800px)
{
    .LoginRect{
    height:450px;
    width:350px;
    left:5%;
}
.LoginImage{
     width:50rem;
     height:60rem;
     right:1%;
     top:-9%;
}
.arrow{
    font-size:2rem;
    position:absolute;
    left:-8%;
    top:-9%;
}
}
@media only screen and (max-width: 700px)
{
    .LoginImage{
       display:none;
   }
    .LoginRect{
    height:450px;
    width:320px;
    left:5%;
}
.LoginImage{
     width:45rem;
     height:60rem;
     right:1%;
     top:-9%;
}
input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 25px;
            position:absolute;
            left:30%;
           
        }
.input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1rem;
            position:absolute;
            left:5%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }

.signup{
            position:absolute;
            right:8%;
            top:75%;
            h4{
                font-size:1rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 30px;
                background:var(--orange);
                border:none;
                border-radius:20px;
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }
           
        }
}
@media only screen and (max-width: 600px)
{
   
   .LoginImage{
       display:none;
   }
   .LoginRect{
    height:90%;
    width:70%;
    left:15%;
    right:15%;
}

.Lheading{    
            font-size:2rem;
            
        }
        input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 35px;
            position:absolute;
            left:34%;
           
        }
.input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1rem;
            position:absolute;
            left:10%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }

        ${
          "" /* input{
            padding:10px 65px;
            position:absolute;
            left:37%;
            right:37%;
        }
        .input1{
             top:40%;
        }
        .input2{
             top:60%;
        }
        label{
           
            font-size:1.2rem;
            position:absolute;
            left:7%;
            
        }
        .label1{
            top:33%; 
        }
        .label2{
            top:52%;
        }
        .btnLogin{
            position:absolute;
            top:78%;
            left:23%;
            right:23%;
            padding:15px 80px;
        }
        .findlink{
            font-size:1rem;
        } */
        }
        .signup{
            position:absolute;
            right:8%;
            top:105%;
            h4{
                font-size:1.3rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 50px;
                background:var(--orange);
                border:none;
                border-radius:20px;
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }
           
        }

}
@media only screen and (max-width: 530px)
{
    input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 20px;
            position:absolute;
            left:30%;
           
        }
}
@media only screen and (max-width: 500px)
{

   .LoginRect{
    height:90%;
    width:75%;
    left:13%;
}
.Lheading{    
            font-size:1.5rem;
        }

        input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 25px;
            position:absolute;
            left:30%;
           
        }
.input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1rem;
            position:absolute;
            left:5%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }
        .signup{
            position:absolute;
            right:15%;
            top:105%;
            h4{
                font-size:1rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 30px;
                background:var(--orange);
                border:none;
                border-radius:20px;
                &:hover{
                    background-image: linear-gradient(to right, var(--lightOrange1) 0%, var(--lightOrange2) 51%, var(--lightOrange3) 100%);
                }
               
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }

        

}
@media only screen and (max-width: 420px)
{
    .Lheading{    
            font-size:1.5rem;
        }

        input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 25px;
            position:absolute;
            left:30%;
           
        }
.input3{
            top:25%;
        }
        .input1{
             top:37%;
        }
        .input2{
             top:48%;
        }
        .input4{
            top:60%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1rem;
            position:absolute;
            left:5%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:25%;
        }
        .label1{
            top:37%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:60%;
        }
        .btnLogin{
            position:absolute;
            top:79%;
            left:25%;
            right:25%;
            background:var(--green);
            padding:15px 60px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }

}
@media only screen and (max-width: 530px)
{
    input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 20px;
            position:absolute;
            left:30%;
           
        }
}
@media only screen and (max-width: 400px)
{

   .LoginRect{
    height:80%;
    width:85%;
    left:8%;
}
.signup{
            position:absolute;
            right:10%;
            top:95%;
            h4{
                font-size:1rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 30px;
                background:var(--orange);
                border:none;
                border-radius:20px;
                &:hover{
                    background-image: linear-gradient(to right, var(--lightOrange1) 0%, var(--lightOrange2) 51%, var(--lightOrange3) 100%);
                }
               
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }
}

@media only screen and (max-width: 350px)
{
    .LoginRect{
    height:580px;
    ${"" /* width:400px; */}
    background:white;
    position:absolute;
    border-radius:20px;
    top:10%;
    left:10%;
    -webkit-box-shadow: 0 0 10px 10px var(--lightPurple);
    -moz-box-shadow: 0 0 10px 10px var(--lightPurple);
    box-shadow: 0 0 10px 10px var(--lightPurple);
}
       .Lheading{    
            font-size:1.5rem;
        }
        input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 35px;
            position:absolute;
            left:10%;
           
        }
.input3{
            top:25%;
        }
        .input1{
             top:39%;
        }
        .input2{
             top:53%;
        }
        .input4{
            top:72%;
        }

        label{
            font-family: 'Cabin', sans-serif;
            font-size:1rem;
            position:absolute;
            left:10%;
            font-weight:bold;
            color:var(--darkGrey);
        }
        .label3{
            top:20%;
        }
        .label1{
            top:34%; 
        }
        .label2{
            top:48%;
        }
        .label4{
            top:62%;
        }
        .btnLogin{
            position:absolute;
            top:84%;
            left:22%;
            right:25%;
            background:var(--green);
            padding:15px 50px;
            border:none;
            border-radius:40px;
            &:hover{
                background-image: linear-gradient(to right, var(--lightGreen1) 30%, var(--lightGreen2) 100%);
            }
        }
        .findlink{
            color:white;
            font-weight:bold;
            font-size:1rem;
        }
        .signup{
            position:absolute;
            right:10%;
            top:132%;
            h4{
                font-size:1rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 30px;
                background:var(--orange);
                border:none;
                border-radius:20px;
                &:hover{
                    background-image: linear-gradient(to right, var(--lightOrange1) 0%, var(--lightOrange2) 51%, var(--lightOrange3) 100%);
                }
               
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }

}

@media only screen and (max-width: 330px)
{

   .LoginRect{
    height:90%;
    width:90%;
    left:5%;
}
.btnLogin{
            position:absolute;
            top:85%;
            left:23%;
            right:23%;
            padding:10px 25px;
        }
.arrow{
    font-size:2rem;
    position:absolute;
    left:-3%;
    top:-9%;
}
.signup{
            position:absolute;
            right:10%;
            top:103%;
            h4{
                font-size:0.9rem;
                color:var(--darkGrey);
            }
            button{
                padding:10px 30px;
                background:var(--orange);
                border:none;
                border-radius:20px;
                &:hover{
                    background-image: linear-gradient(to right, var(--lightOrange1) 0%, var(--lightOrange2) 51%, var(--lightOrange3) 100%);
                }
               
            }
            .register{
                color:var(--darkGrey);
                font-size:1rem;
                font-weight:bold;
            }


}
@media only screen and (max-width: 290px)
{
    input{
            background:var(--lightPurple);
            border:none;
            border-radius:20px;
            padding:10px 22px;
            position:absolute;
            left:8%;
           
        }
}
`;

export default MentorRegister;
