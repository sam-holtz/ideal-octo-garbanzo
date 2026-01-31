import React from 'react'
import styled from 'styled-components'


const PrimaryButton = ({name}) => {
   return (
      <ButtonStyled>
        {name}
      </ButtonStyled>
   )
}


const ButtonStyled = styled.button`
   padding: 0.75rem 1.75rem;
   background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
   border: none;
   outline: none;
   border-radius: var(--radius-lg);
   color: #fff;
   font-size: 1rem;
   font-weight: 600;
   font-family: inherit;
   cursor: pointer;
   transition: transform var(--transition), box-shadow var(--transition);
   box-shadow: var(--shadow-md);

   &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
   }
`

export default PrimaryButton
