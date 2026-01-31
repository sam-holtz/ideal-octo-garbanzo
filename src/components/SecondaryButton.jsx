import React from 'react'
import styled from 'styled-components'

const SecondaryButton = ({ name }) => {
   return (
      <SecondaryButtonStyled>
         <span>{name}</span>
         
         <i className="fas fa-arrow-right"></i>
      </SecondaryButtonStyled>
   )
}

const SecondaryButtonStyled = styled.button`
   padding: 0.9rem 1.75rem;
   background: rgba(255, 255, 255, 0.15);
   backdrop-filter: blur(10px);
   border: 2px solid rgba(255, 255, 255, 0.3);
   outline: none;
   border-radius: var(--radius-lg);
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   font-family: inherit;
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   transition: all var(--transition);

   &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-2px);
   }
`

export default SecondaryButton
