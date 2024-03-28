import React from 'react'
import styled from 'styled-components'

const Drawing = ({num, onClick, clicked}) => {  
  return (
    <DrawingButton 
      onClick={() => onClick(num)}
      disabled={clicked ? !clicked[num] : false}
      isClicked={clicked ? !clicked[num] : false}
    >
        {num}
    </DrawingButton>
  )
}

export default Drawing

const DrawingButton = styled.button`
    width: 70px;
    height: 70px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;

    background-color: ${props => (props.isClicked ? 'black' : 'initial')};
    color: ${props => (props.isClicked ? 'white' : 'initial')};
    cursor: ${props => (props.isClicked ? 'not-allowed' : 'pointer')};
`;