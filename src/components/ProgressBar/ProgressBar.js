/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small : {
    "--height" : '8px',
    "--borderRadius" : '4px'
  },
  medium : {
    "--height" : '12px',
    "--borderRadius" : '4px'
  },
  large : {
    "--height" : '24px',
    "--borderRadius" : '8px',
    "--padding" : '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  return <Wrapper style = {styles} value ={value} max = "100"> 50%</Wrapper>
};


const Wrapper = styled.progress`

-webkit-appearance: none;
width:370px;
height: var(--height);
::-webkit-progress-bar {
  background-color : ${COLORS.gray50};
  border-radius : var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
}

::-webkit-progress-value {
  border-radius : var(--borderRadius);
background-color : ${COLORS.primary};
padding:'20px'
}

::-webkit-progress-inner-element{

}
/* border-radius: var(--borderRadius) */
`

export default ProgressBar;
