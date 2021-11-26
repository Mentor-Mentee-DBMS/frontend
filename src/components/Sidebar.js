import React from 'react'
import { useMMContext } from '../context/MM_context'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import MentorLogin from './MentorLogin'


const Sidebar = () => {

const {isSidebarOpen,closeSidebar} = useMMContext();


  return (
    <SidebarContainer>
    
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
       <div className='sidebar-header'>
         <h1>Lorem</h1>
         <button className='close-btn' type='button' onClick={closeSidebar}>
           <FaTimes/>
         </button>
       </div>
       <ul className="links">
         {links.map(({id,text,url})=>{
           return <li key={id}>
             <Link to={url} onClick={closeSidebar}>{text}</Link>
           </li>
         })}
    
       </ul>
       <MentorLogin className="mm"/>

       </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
 ${'' /* .mm{
   diplay:flex;
   flex-direction:column;
 } */}
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    h1{
      font-family:'tangerine',cursive;
      font-size:5rem;
      color:var(--heading);
    }
  }
  .close-btn {
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--black);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .links {
    margin-bottom: 2rem;
    
  }
  .links a {
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight:bolder;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--heading);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: white;
    color: var(--black);
    font-size:1.1rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom right, #FCFBFF,#EFF6FF,#8E7CC3);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
 
  .mLogin{
   
    margin-top:10%;
   
  }
  .mentee{
    background:white;
   
    margin-top:4%;
  }
 

} 


  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar

