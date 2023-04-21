import React from 'react';
import "./Header.css";
// import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Header = () => {
  return (
    <div>
      <span onClick={()=>
      window.scroll(0,0)} 
      className='header'>
        {/* <LocalMoviesIcon style={{color:"black",
        fontSize:40,
         marginTop:1}}/> */}
        Entertainment hub
      </span>
    </div>
  )
}

export default Header
