import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/img/arrow.svg'


const AnimatedButton = ({ text }) => {
   return (
      <AnimatedButtonStyled>
         {text}
         <img src={arrow} alt="" />
      </AnimatedButtonStyled>
   )
}

const AnimatedButtonStyled = styled.button`
   padding: 0.9rem 1.75rem;
   background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
   border: none;
   outline: none;
   border-radius: var(--radius-lg);
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   font-family: inherit;
   cursor: pointer;
   display: inline-flex;
   align-items: center;
   gap: 0.5rem;
   transition: all var(--transition);
   box-shadow: var(--shadow-md);

   &:hover {
     transform: translateY(-2px);
     box-shadow: var(--shadow-lg);
   }

   img{
      margin-left: 0.5rem;
   }
`

export default AnimatedButton
