import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import Header from './Header'
import ContactUs from './ContactUs.js'

const Layout = ({children}) => {
  return (
    <>
      <Nav/>
      <Header/>
      <div>
        <main>{children}</main>
      </div>
      <ContactUs/>
    </>
  );
}

export default Layout;