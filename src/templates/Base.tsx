import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Conception } from './Conception';
import { Contact } from './Contact';
import { Examples } from './Examples';
import { Features } from './Features';
import { Footer } from './Footer';
import { Gallery } from './Gallery';
import { Hero } from './Hero';
import { Pricing } from './Prices';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <ToastContainer />
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Features />
      <Conception />
      <Examples />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export { Base };
