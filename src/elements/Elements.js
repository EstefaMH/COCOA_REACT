import Styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Banner  = Styled.div`
    background-image: url(${props => props.background});
    background-repeat : no-repeat;
    background-size: cover;
    width : 100%;
    display: flex;
`;
  
const colors = {
    border: "#0075ff",
    error: "#bb2929",
    correct: "green"
  }
  
  
const Form = Styled.form`
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  
    @media (max-width: 800px){
      grid-template-columns: 1fr;
    }
  `;
  
  const Label = Styled.label`
    display: block;
    font-weight: 700;
    padding : 10px;
    min-height: 40px;
    cursor: pointer;
    
    ${props => props.validate === 'true' && css`
      color: gold;
    `}
    ${props => props.validate === 'false' && css`
     color : ${colors.error};
  ` }
  `;
  
  const GroupInput = Styled.div`
    position: relative;
    z-index:90
  `;
  
  const Input = Styled.input`
    width:100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px ;
    transition : 0.3s ease all;
    border : 3px solid transparent;
  
    &:focus{
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0 30px rgba(163 , 163 , 163, 0.4);
    }
  
    ${props => props.validate === 'true' && css`
      border: 3px solid transparent;
    `}
    ${props => props.validate === 'false' && css`
      border: 3px solid ${colors.error} !important;
  ` }
  
  
  
  `;
  
  
  const Errormsj = Styled.p`
    font-size:12px;
    margin-bottom:0;
    color: ${colors.error};
    display:none;
  
    ${props => props.validate === 'true' && css`
      display:none;
    `}
    
    ${props => props.validate === 'false' && css`
      display:block;
  ` }
  
  `;
  
  const ValidationIcon = Styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom:14px;
    font-size:16px;
    color: ${colors.correct};
    opacity: 0; 
  
    ${props => props.validate === 'true' && css`
     opacity: 1; 
    `}
    ${props => props.validate === 'false' && css`
     opacity: 0 !important; 
  ` }
  `;
  
  const ContainerTerms = Styled.div`
    grid-column: span 2;
  
    input {
      margin-right: 10px;
    }
  
    @media (max-width: 800px){
      grid-column: span 1;
    }
  `;
  
  const ContainerBtnCenter = Styled.div`
    display:flex;
    width: 100%;
    flex-direction : column;
    justify-content: column;
    align-items: center;
  `;
  
  const Btn = Styled.button`
    width: 30%;
    padding: 2%;
    margin-left: -65%;
    color : gold;
    background-color : #1c0802;
    border-radius: 5%;
    border: 2px solid ;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5;
  `;
  
  const MsjSuccess = Styled.p`
      font-size: 14px;
      margin-top: 6%;
      margin-left: -50%;
      margin-bottom: -2%;
      color: ${colors.correct};
    opacity:0;
  
    ${props => props.send === false && css`
      opacity: 0; 
   `}
  
    ${props => props.send === true && css`
      opacity: 1; 
   `}
  `;
  
  const MsjError = Styled.div`
      height: 45px;
      line-height: 45px;
      background: transparent;
      padding: 0px 15px;
      border-radius: 3px;
      border: 1px solid gold;
      color: gold;
      grid-column: span 2;
      p {
          margin: 0;
      } 
      b {
          margin-left: 10px;
      }
  
    opacity:0;
  
    ${props => props.send === false && css`
      opacity: 1; 
   `}
  
    ${props => props.send === true && css`
      opacity: 0; 
   `}
  `;
  
  
  export {Banner, Form, colors, GroupInput, Input, Errormsj, ValidationIcon, Label, ContainerTerms, ContainerBtnCenter, Btn, MsjError, MsjSuccess }




