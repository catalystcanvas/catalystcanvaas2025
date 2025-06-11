 
'use client'

import AboutHomeFour from '@/components/about/AboutHomeFour';
import Portfolio from '@/components/portfolio/Portfolio';
import Portfolioo from '@/components/portfolio/portfolioo';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';







const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <Portfolioo />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;