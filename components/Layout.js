import React, { useState, useEffect } from 'react';
import Navigation from './Nav'

const Layout = ({children}) => {
  return (
    <>
      <Navigation/>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;