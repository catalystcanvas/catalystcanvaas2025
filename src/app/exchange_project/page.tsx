 
'use client'

import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import TenExchangeShowcase from '@/components/portfolio/portfolio_exchange'






const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <TenExchangeShowcase />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;