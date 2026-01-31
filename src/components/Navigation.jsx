import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import PrimaryButton from './PrimaryButton'
import logo from '../assets/img/logo.svg'

const Navigation = () => {



   return (
      <NavigationStyled>
         <div className="logo">
            <img src={logo} alt="" />
         </div>
         <ul>
            <li>
               <Link to="header" spy={true} smooth={true}>Home </Link>
            </li>
            <li>
               <Link to="feathures" spy={true} smooth={true}>Features</Link>
            </li>
            <li>
               <Link to="pricing" spy={true} smooth={true}>Pricing </Link>
            </li>
         </ul>
         <PrimaryButton name='Signup' />
      </NavigationStyled>
   )
}

const NavigationStyled = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.5rem 0;

   .logo img {
      height: 40px;
      filter: brightness(0) invert(1);
   }

   ul{
      display: flex;
      gap: 2.5rem;
      li{
         cursor: pointer;
         font-weight: 500;
         transition: opacity 0.2s ease;
         &:hover { opacity: 0.8; }
      }
      a { color: #fff; }
   }
`

export default Navigation
