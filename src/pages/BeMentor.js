import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from '../components'
import { FaCamera,FaUpload} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BeMentor() {

    const [state,setState] = useState({
        profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwaLDKaK49tsHmdMGOrmTdns5qiw080F2Yw&usqp=CAU"
    })

    const imageHandler = (e) => {
  
        const reader = new FileReader();
        reader.onload = () => {
        if(reader.readyState === 2){
        setState({profileImg: reader.result })
        }
        }
        reader.readAsDataURL(e.target.files[0]);
      }
    
      const {profileImg} = state


    return <Be>
        <Navbar/>
        <Sidebar/>
        <section className="beMentor">
          <div className="rectangleBe">
             <h2>Be a Mentor</h2>
             <div className="parts1">
               <div className="circle1">
                <div className="img-holder1">
                 <img src = {profileImg} id="img" className="profile-img1"/>
                 <div className = "camcircle1"></div>
                </div>
                <input className="profile-input" type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler}/>
                 <div className="addp1">
                   <label htmlFor="input" className="img-upload1"> <FaCamera className="camera1"/></label>
                 </div>
               </div>

               <div className="information1">
                   <label className="yourname1" for="name">Name:</label>
                   <input
                       className="style2"
                       type="text"
                       id="name"
                       name="name"
                    //    onChange={(e)=>setName(e.target.value)}
                   /> <br/>

                   <label className="mail1" for="email">Email:</label>
                   <input
                       className="style2"
                       type="email"
                       name="email"
                       placeholder="mentor@gmail.com"
                    //    value={email}
                    //    onChange={(e)=>setEmail(e.target.value)}
                   /> <br/>

                   <label className="contactNumber1" for="contact">Phone No.:</label>
                   <input
                       className="style2"
                       type="number"
                       id="contact-number"
                       name="contact-number"
                    //    value={phone}
                    //    onChange={(e)=>setPhone(e.target.value)}
                   /> <br/>

               <label className="birthday" for="birthday">DOB:</label>
                <input
                    className="style2"
                    type="date"
                    id="birthday"
                    name="birthday"
                    // value={phone}
                    // onChange={(e)=>setPhone(e.target.value)}
                /> <br/>

                   <label className="address1" for="address">Address:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="address"
                       name="address"
                    //    value={address}
                    //    onChange={(e)=>setAddress(e.target.value)}
                   /> <br/>

                   <label className="url1" for="url">Linkedin Url:</label>
                   <input
                       className="style2"
                       type="text"
                       id="url"
                       name="url"
                    //    value={url}
                    //    onChange={(e)=>setUrl(e.target.value)}
                   /> <br/>

                   <label className="bio1" for="bio">About/Bio:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="bio"
                       name="bio"
                    //    value={bio}
                    //    onChange={(e)=>setBio(e.target.value)}
                   /> <br/>

                   <label className="education1" for="education">Qualifications:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="education"
                       name="education"
                    //    value={education}
                    //    onChange={(e)=>setEducation(e.target.value)}
                   /> <br/>

                   <label className="domains1" for="domains">Domains:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="domains"
                       name="domains"
                    //    value={domains}
                    //    onChange={(e)=>setDomains(e.target.value)}
                   /> <br/>

                   <label className="industry" for="industry">Industry:</label>
                   <input
                       className="style2"
                       type="text"
                       id="industry"
                       name="industry"
                    //    value={industry}
                    //    onChange={(e)=>setIndustry(e.target.value)}
                   /> <br/>

                   <label className="experience" for="experience">Experience:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="experience"
                       name="experience"
                    //    value={experience}
                    //    onChange={(e)=>setExperience(e.target.value)}
                   /> <br/>

                   <label className="achieve" for="achieve">Achievements:</label>
                   <textarea
                       className="style3"
                       type="text"
                       id="achieve"
                       name="achieve"
                    //    value={achieve}
                    //    onChange={(e)=>setAchieve(e.target.value)}
                   /><br/>
            


               </div>
             </div>
             <div className="click1">
                <button className="submitBtn1"><Link className="submit1" to='/'>SUBMIT</Link></button>
            </div>
          </div>
        </section>
    </Be>
}
const Be = styled.section`
.rectangleBe{
  position:absolute;
  background-color:white;
  height:1480px;
  width:90%;
  align-content:center;
  margin-left:5%;
  margin-top:10%;
  margin-bottom:10%;
  text-align:center;
  -webkit-box-shadow: 0 0 10px 10px var(--lightOrange3);
  -moz-box-shadow: 0 0 10px 10px var(--lightOrange3);
  box-shadow: 0 0 10px 10px var(--lightOrange3);
  h2{
    font-family:'tangerine',cursive;
    font-size:3.8rem;
    padding-top:2rem;
    color:var(--darkGrey);
   }
}
.profile-img1{
  position:relative;
  z-index:0;
  height:250px;
  width:250px;
  margin-bottom:40%;
  border-radius:50%;
}
#input[type="file"]{
  display:none;
}
.camcircle1{
  position:relative;
  z-index:2;
  width:65px;
  height:65px;
  border-radius:50%;
  background-color:var(--orange);
  margin-top:-77%;
  margin-left:77%;

}
.addp1{
  margin-top:-20%;
  margin-left:80%;

}
.camera1{
  font-size:2rem;
  position:relative;
  z-index:4;
  &:hover{
  font-size:2.3rem;
 }
}
.parts1{
  display:flex;
  flex-direction:row;
  flex-flow:wrap;
  justify-content:space-around;
  margin-top:7%;
}
label{
  font-family: 'Cabin', sans-serif;
    color: var(--darkGrey);
    font-size: 1.3rem;
    letter-spacing:1.3px;  
    
}
.style2{
    width: 90%;
    height: 30px;
    border-radius: 20px;
    border:none;
    background-color:#EAEAEA;
    text-align:center;
    margin-bottom:4%;
    font-size:1rem;
    font-family: 'Cabin', sans-serif;
    color: var(--lightGrey);
}
.style2:focus{
  outline:none;
}
.style3{
    width: 90%;
    height: 60px;
    border-radius: 20px;
    border:none;
    background-color:#EAEAEA;
    text-align:center;
    margin-bottom:4%;
    font-size:1rem;
    font-family: 'Cabin', sans-serif;
    color: var(--lightGrey);
}
.style3:focus{
  outline:none;
}
.yourname1{
  margin-right:64%;
}
.mail1{
  margin-right:64%;
}
.contactNumber1{
 margin-right:53%;
}
.birthday{
  margin-right:68%;
}
.address1{
  margin-right:60%;
}
.url1{
  margin-right:50%;
}
.bio1{
   margin-right:55%;
}
.education1{
  margin-right:44%;
}
.domains1{
  margin-right:55%;
}
.industry{
 margin-right:53%;
}
.experience{
 margin-right:51%;
}
.achieve{
  margin-right:40%;
}
.click1{
  margin-top:10%;
}
.submitBtn1{
  border:none;
  width:170px;
  height:50px;
  border-radius:50px;
  background-color:var(--orange);
  
  &:hover{
    background-color:var(--lightOrange2);
  }
}
.submit1{
    font-size:2rem;
    font-family: 'Cabin', sans-serif;
    color: var(--darkGrey); 
    font-weight:bolder;
    cursor:pointer;
  }


  @media (max-width: 650px){
      .rectangleBe{
          margin-top:15%;
      }
      .profile-img1{
        height:210px;
        width:210px;
      }
      .camcircle1{
          width:55px;
          height:55px;
          margin-top:-77%;
          margin-left:78%;
      }
      .addp1{
          margin-top:-20%;
          margin-left:82%;
      }
      .camera1{
          font-size:1.7rem;
      }
  }

  @media (max-width: 430px)
  {
    .rectangleBe{
          margin-top:20%;
          h2{
              font-size:2.8rem;
          }
      }
  }

  @media (max-width: 360px)
  {
    .rectangleBe{
          margin-top:30%;
          h2{
              font-size:2.4rem;
          }
      }
  }
  @media (max-width: 350px)
  {
    .rectangleBe{
        width:95%;
        margin-left:2.5%;
          margin-top:30%;
          h2{
              font-size:2.4rem;
          }
      }
      .label{
          font-size:0.9rem;
      }
      
.click1{
  margin-top:10%;
}
.submitBtn1{
  border:none;
  width:130px;
  height:45px;
  border-radius:50px;

}
.submit1{
    font-size:1.3rem;
    font-family: 'Cabin', sans-serif;
    color: var(--darkGrey); 
    font-weight:bolder;
    cursor:pointer;
  }
  }
`

export default BeMentor
