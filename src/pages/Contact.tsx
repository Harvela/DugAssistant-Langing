import React from 'react';

import { Navbar } from '@/navigation/Navbar';
import { Contact } from '@/templates/Contact';
import { Footer } from '@/templates/Footer';

const Contactpage = () => {
  return (
    <>
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>
      <div className="pt-8">
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Contactpage;
