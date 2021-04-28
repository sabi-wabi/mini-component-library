import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
border-radius : 8px;
max-width : min-content;

&:focus{
  outline : ${COLORS.primary};
  color: ${COLORS.transparentGray35}
};

&:hover {
  color : ${COLORS.black}
}

`

export default Select;
