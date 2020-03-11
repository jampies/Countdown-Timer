import React from 'react';
import { StyledLayoutContainer } from './Styles';

const Layout = ({ children }) => {
  return (
    <StyledLayoutContainer>
      {children}
    </StyledLayoutContainer>
  );
};

export default Layout;
