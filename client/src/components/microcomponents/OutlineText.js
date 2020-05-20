// ==========================================================
//  IMPORTING LIBRARIES
// ==========================================================

import React from 'react';
import styled from 'styled-components';

// =========================================================
// DEFINING STYLES
// =========================================================

const Outline = styled.div`
  font-family: Circular Std;
  font-weight: 900;
  font-style: italic;
  font-weight: 900;
  line-height: 82.5%;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
`;

// ==========================================================
//  EXPORTING APP
// ==========================================================

export default props => {
  const { text, color, size, weight } = props;
  return (
    <Outline style={{ color: color, fontSize: size, fontWeight: weight }}>
      {text}
    </Outline>
  );
};
