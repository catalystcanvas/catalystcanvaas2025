'use client'
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from '@/assets/img/portfolio_1.jpg';
import portfolio_img_2 from '@/assets/img/portfolio_2.jpg';
import portfolio_img_3 from '@/assets/img/portfolio_3.jpg';
import portfolio_img_4 from '@/assets/img/portfolio_4.jpg';

interface PortfolioItem {
  img: StaticImageData;
  title: string;
  category: string;
  link: string;
}[]

const portfolio_slider: PortfolioItem[] = [
  {
    img: portfolio_img_1,
    title: `DestiniGo`,
    category: `Digital Services / App Design`,
    link: `/destinigo_project`, // your actual DestiniGo website
  },
  {
    img: portfolio_img_2,
    title: `Intentnetic`,
    category: `Digital Services / Web Design`,
    link: `/intentnetic_project`, // Intentnetic website
  },
  {
    img: portfolio_img_3,
    title: `Bs Associates`,
    category: `Digital Services / Figma Design`,
    link: `/bs_associates_project`, // replace with actual link
  },
  {
    img: portfolio_img_4,
    title: `Prepaw`,
    category: `Digital Services / App Design`,
    link: `/prepaw_project`, // replace with actual link
  },
];

const PortfolioHomeOne = () => {
  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Portfolio
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto" 
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns">
          {portfolio_slider.map((item, i) =>
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
              <Link href={item.link} target="_blank" rel="noopener noreferrer" className="cs_portfolio cs_style_1">
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">
                      {item.title}
                    </h2>
                    {/* <div className="cs_portfolio_subtitle">
                      {item.category}
                    </div> */}
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )} 

        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;