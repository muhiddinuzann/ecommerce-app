import React from 'react'
import { useNavigate } from 'react-router-dom';

function NavbarLeft() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className='e-commerce__container__navbar__left'><img src='https://imagedelivery.net/yyF3q_ZdBh6EyD00sGNWsw/c5516538-1906-4b86-3ef1-30fa6abeaf00/public' width={70}></img></div>
  )
}

export default NavbarLeft