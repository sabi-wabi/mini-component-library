import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <form>
    <div>
      
      <input type = 'text' placeholder = {placeholder}>X</input>
    </div>
  </form>
};



export default IconInput;
