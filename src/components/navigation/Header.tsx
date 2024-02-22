import logo from '@/assets/svg/logo.svg';
import DiscordIcon from "@/utils/icons/DiscordIcon";
import BurgerIcon from "@/assets/svg/burger-icon.svg";
import CloseIcon from "@/assets/svg/close-icon.svg";
import { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className='navigation-container'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button className='menu-burger' onClick={() => setMenu(!menu)}>
          <img src={BurgerIcon} alt="burger-icon" />
        </button>
        <ul className={`navigation ${menu && 'active'}`}>
          <button className='close-icon' onClick={() => setMenu(!menu)}>
            <img src={CloseIcon} alt="" />
          </button>
          <li className='discord'>
            <a href="" className='link'>
              <DiscordIcon />
              <span>Discord</span>
            </a>
          </li>
          <li><a href="" className='link'>Contact Us</a></li>
          <li><a href="" className='link'>Dev Portal</a></li>
          <li>
            <a href="" className='btn-outline-primary'>Log In</a>
          </li>
          <li>
            <a href="" className='btn-outline-secondary'>Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
