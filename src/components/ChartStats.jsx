import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'

const ChartStats = ({ name, amount }) => {
   return (
      <ChartStatsStyled>
         <p><strong>{name}</strong></p>
         <h4>{amount}</h4>
      </ChartStatsStyled>
   )
}

const ChartStatsStyled = styled.div`
   background: var(--surface);
   border-radius: var(--radius-xl);
   border: 1px solid var(--border);
   height: 10rem;
   padding: 2rem;
   width: 50%;
   box-shadow: var(--shadow-sm);
   transition: all var(--transition);

   &:hover {
     box-shadow: var(--shadow-md);
   }
   p{
      color: var(--neutral-700);
      font-weight: 500;
   }
   h4{
      font-size: 2rem;
      color: var(--primary);
      font-weight: 700;
   }
`

export default ChartStats
