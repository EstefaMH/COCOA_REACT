import React from "react";
import {Label , GroupInput , Input , Errormsj , ValidationIcon} from '../../elements/Elements'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

function Inputfx(props){
  
  const handleInputChange =(e)=>{
    props.setState({...props.state,campo:e.target.value})
  }

  function validate(e){
    if(props.regex){
      if(props.regex.test(props.state.campo)){
        props.setState({...props.state,valido:'true'})
      }else{
        props.setState({...props.state,valido:'false'})
      }
    }
  }
  
    return(
        <div>
          <Label validate={props.state.valido} htmlFor={props.name}>{props.label}</Label>

          <GroupInput>
            <Input type={props.type} placeholder={props.placeholder} id={props.id} value={props.state.campo} onChange={handleInputChange}
              onKeyUp={validate} onBlur={validate} validate={props.state.valido}/> 

            {/*<FontAwesomeIcon icon="fa-solid fa-check" />*/}
            <ValidationIcon validate={props.state.valido} icon={faCheckCircle} />
          </GroupInput>

          <Errormsj validate={props.state.valido}>{props.emsj}</Errormsj>
        </div>
    );
}

export default Inputfx;