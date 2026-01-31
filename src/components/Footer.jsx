import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import logo from '../assets/img/logo.svg'

const Footer = () => {
   return (
      <FooterStyled>
         <InnerLayout>
            <div className="footer-con">
               <div className="logo-con">
                  <div className="logo-wrap">
                     <img src={logo} alt="Logo" />
                     <p>
                        © 2025 Sam Holtz<br />
                        All rights reserved
                     </p>
                  </div>
               </div>
               <div className="contact-links">
                  <a href="mailto:samholtz1205@gmail.com" className="contact-item">
                     <i className="fas fa-envelope"></i>
                     samholtz1205@gmail.com
                  </a>
                  <a href="https://github.com/sam-holtz" target="_blank" rel="noopener noreferrer" className="contact-item">
                     <i className="fab fa-github"></i>
                     github.com/sam-holtz
                  </a>
               </div>
               <nav className="bottom-nav">
                  <ul className="links1">
                     <li><a href="#header">Home</a></li>
                     <li><a href="#feathures">Features</a></li>
                     <li><a href="#pricing">Pricing</a></li>
                  </ul>
                  <ul className="links2">
                     <li><a href="#card">Services</a></li>
                     <li><a href="#faq">FAQ</a></li>
                  </ul>
                  <ul className="links3">
                     <li><a href="#">Terms of use</a></li>
                     <li><a href="#">Privacy Policy</a></li>
                  </ul>
               </nav>
            </div>
         </InnerLayout>
      </FooterStyled>
   )
}
const FooterStyled = styled.footer`
   padding: 4rem clamp(2rem, 8vw, 18rem);
   background: linear-gradient(180deg, var(--neutral-100) 0%, var(--neutral-200) 100%);
   border-top: 1px solid var(--border);

   @media screen and (max-width: 1347px){
      padding: 4rem clamp(2rem, 6vw, 8rem);
   }
   @media screen and (max-width: 990px){
      padding: 3rem clamp(1.5rem, 4vw, 4rem);
   }

   .footer-con{
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 3rem;
      align-items: start;

      @media screen and (max-width: 768px){
         grid-template-columns: 1fr;
         text-align: center;
      }

      .logo-con{
         display: flex;
         align-items: center;
         .logo-wrap{
            display: flex;
            align-items: center;
         }
         img{
            width: 80px;
            filter: brightness(0) saturate(100%) invert(30%) sepia(20%) saturate(500%);
         }
         p{
            margin-left: 1rem;
            color: var(--neutral-500);
            font-size: 0.9rem;
         }
      }

      @media screen and (max-width: 480px){
         .logo-wrap{
            flex-direction: column;
            margin: 0 auto;
            p{ margin-left: 0; margin-top: 0.5rem; }
         }
      }
   }

   .contact-links{
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .contact-item{
         display: flex;
         align-items: center;
         gap: 0.5rem;
         color: var(--neutral-700);
         font-size: 0.95rem;
         transition: color var(--transition);

         &:hover{
            color: var(--primary);
         }
         i{
            width: 20px;
            color: var(--primary);
         }
      }
   }

   .bottom-nav{
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      li{
         padding: 0.5rem 0;
         a{
            color: var(--neutral-700);
            font-size: 0.95rem;
            &:hover{ color: var(--primary); }
         }
      }
   }
`

export default Footer
