 
'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import DestinigoShowcase from '@/components/portfolio/portfolio_destinigo'






const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <DestinigoShowcase />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;