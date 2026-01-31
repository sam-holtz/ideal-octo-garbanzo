import React, { useState } from 'react'
import styled from 'styled-components'

const ScrolledButton = () => {

   const [show, setShow] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 400) {
         setShow(true)
      }
      else if (scrolled <= 400) {
         setShow(false)
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   window.addEventListener('scroll', toggleVisible);

   return (
      <Button onClick={scrollToTop} style={{display: show ? 'inline': 'none'}}>
         <i className="fas fa-arrow-circle-up"></i>
      </Button>
   )
}

const Button = styled.button`
   position: fixed; 
   right: clamp(1rem, 3vw, 2rem);
   bottom: 2rem;
   z-index: 100;
   cursor: pointer;
   color: var(--primary);
   background: var(--surface);
   outline: none;
   border: none;
   width: 48px;
   height: 48px;
   border-radius: 50%;
   box-shadow: var(--shadow-lg);
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all var(--transition);

   &:hover{
      color: var(--accent);
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
   }
   i{
      font-size: 1.5rem;
   }
`

export default ScrolledButton
