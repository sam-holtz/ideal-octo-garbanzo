import React, { useState } from 'react'
import styled from 'styled-components'

const Questions = ({ title, description }) => {
   const [toggle, setToggle] = useState(false)

   const toggleQuestion = () => {
      setToggle(!toggle)
   }
   return (
      <QuestionStyled >
         <div  className="q-con">
            <div className="toggle-title">
               <h4>{title}</h4>
               <button onClick={toggleQuestion}>
                  <i className={`fas fa-${toggle ? 'minus' : 'plus'}`}></i>
               </button>
            </div>
            {toggle && <p>{description}</p>}
         </div>
      </QuestionStyled>
   )
}

const QuestionStyled = styled.div`
   margin-top: 0.5rem;
   background: var(--surface);
   margin: 1rem 0;
   padding: 1.25rem 1.5rem;
   border-radius: var(--radius-lg);
   transition: all var(--transition);
   box-shadow: var(--shadow-sm);
   border: 1px solid var(--border);

   &:hover {
     box-shadow: var(--shadow-md);
   }
   .q-con{
      p{
         margin-top: 1rem;
         font-size: 1.3rem;
      }
      .toggle-title{
         display: flex;
         align-items: center;
         justify-content: space-between;
         transition: all 5s ease-in-out;
         h4{
            color: var(--neutral-900);
            font-size: 1.33rem;
         }
         button{
            background: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            i{
               color: #a7a4a4;
               font-size: 20px;
            }
         }
         
      }
   }
`

export default Questions
