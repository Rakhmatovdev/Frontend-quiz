import  { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const toggleMode=()=>{
  return localStorage.getItem("darkMode") || "light"
}

const Navbar = () => {
  const [theme, setTheme] = useState("light")

  const {title}=useParams()
  //theme toggle function 
  const handleThemeToggle=()=>{
const newTheme= theme=="dark-mode"?"light":"dark-mode";
setTheme(newTheme)
  }
  console.log();
  useEffect(()=>{
    document.body.classList=""
document.body.classList.add(theme)
localStorage.setItem("darkMode",theme)
  },[theme])
  return (
    <header className='header'>
      <div className="header-container container">
        <div className="">{
title && ( <Link className='header-logo' to={"/"}>
  <figure>
    <img src={`../assets/icon-${title.toLowerCase()}.svg`} alt={title.icon} />
  </figure>
  <span>{title}</span>
</Link>)
}</div>
        <div className="">
          <div className="dark-btn" onClick={handleThemeToggle}>
            {/* <input type="checkbox" checked={theme=="light"?false:true}/> */}
                        <input type="checkbox" checked={theme=="dark-mode"} readOnly/>

            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar