import React, { useState, useEffect } from 'react';
import Navigation from './Nav'
import Header from './Header'
import ContactUs from './ContactUs.js'

const Layout = ({children}) => {
  return (
    <>
      <Navigation/>
      <Header/>
      <div>
        <main>{children}</main>
      </div>
      <ContactUs/>
    </>
  );
}

export default Layout;