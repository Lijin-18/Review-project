import React, { useContext } from 'react'
import ThemeContext from './Themecontext'



function Header() {
    const {theme , changeTheme} = useContext(ThemeContext);
  return (
    <div className='header'>
    
    <h1>Review App</h1>
    <button onClick={changeTheme} className={`theme-btn`}>{theme?"🌞":"🌑"}</button>
    </div>
  )
}

export default Header