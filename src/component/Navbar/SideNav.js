import React, { useEffect, useState } from 'react'
import "component/Navbar/SideNav.css"
import { Colors, Fonts } from 'other/customizeStyles'
import { Link } from 'react-router-dom';
import { color } from '@mui/system';


const SideNav = () => {
   const [isMobile , setIsMobile ] = useState()
  const handelOnclick = () =>{
    document.getElementById("SideNavActive").checked = false;
  }

   
  function CreateListItems({id, title, element}) {
    return (<li key={id}>
      <Link key={id} style={{backgroundColor:Colors.primary,
      width:"65vw",
      fontFamily:Fonts.primary,
      border: `2px solid${Colors.primary}`, 
      "&:hover": {
        background: "#efefef"
      },
      
      
      }}  to={element} onClick={handelOnclick}>{title}</Link>

    </li>)
 
  }
  const items = [
   
    CreateListItems({id:1 ,title:"Anslut företag", element : ""}),
    CreateListItems({id:2 ,title:"Logga in", element : "login"}),
    CreateListItems({id:3 ,title:"Så fungerar doerfinder", element : ""}),
    CreateListItems({id:4 ,title:"Jobba hos oss", element : ""}),
    CreateListItems({id:5 ,title:"Beställarskolan", element : ""}),
    CreateListItems({id:6 ,title:"Blogg", element : ""}),
    CreateListItems({id:7 ,title:"Press", element : ""}),
    CreateListItems({id:8 ,title:"Kontakta oss", element : ""}),

  ]

  useEffect(() => {
    setIsMobile(window.innerWidth <= 900)
 
  },[])

  window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 900))
 
  return (
    <>
      <input type="checkbox" id="SideNavActive" />
      <label
        htmlFor="SideNavActive"
        className="nav-menu-btn"
        style={ isMobile? { backgroundColor: Colors.primary, bottom: "110px"} :  { backgroundColor: Colors.primary,  top: "50px"}}
      >
        <span></span>
      </label>
      <label htmlFor="SideNavActive" className="nav-close"></label>
      <div className="nav-wrapper">
        <ul>
          {items}
        </ul>
      </div>
    </>
  );
}


export default SideNav