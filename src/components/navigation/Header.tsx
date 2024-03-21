import logo from '@/assets/svg/logo.svg';
import DiscordIcon from "@/utils/icons/DiscordIcon";
import BurgerIcon from "@/assets/svg/burger-icon.svg";
import CloseIcon from "@/assets/svg/close-icon.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER, RPC_API_URL } from '@/config/constants';

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav className='navigation-container'>
        <Link to={ROUTER.HOME}>
          <img src={logo} alt="logo" />
        </Link>
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
          <li><a href="https://rootstock.io/contact/" target='_blank' className='link'>Contact Us</a></li>
          <li><a href="https://dev.rootstock.io/" className='link'>Dev Portal</a></li>
          <li>
            <a href={`${RPC_API_URL}/login`} target='_blank' className='btn-outline-primary'>Log In</a>
          </li>
          <li>
            <a href={`${RPC_API_URL}/register`} target='_blank' className='btn-outline-secondary'>Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
