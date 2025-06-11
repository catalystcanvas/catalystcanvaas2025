'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import brand_img_1 from "@/assets/img/partner_1.svg";
import brand_img_2 from "@/assets/img/partner_2.svg";
import brand_img_3 from "@/assets/img/partner_3.svg";
import brand_img_5 from "@/assets/img/partner_5.svg";
import brand_img_6 from "@/assets/img/partner_6.svg";
import brand_img_7 from "@/assets/img/partner_7.svg";
import brand_img_8 from "@/assets/img/partner_8.svg";
// import brand_img_9 from "@/assets/img/partner_11.svg";

import styles from './BrandSlider.module.css';

const brandData: StaticImageData[] = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  // brand_img_9,
];


const BrandHomeOne = ({ style_2 }: any) => {
  return (
    <section className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {brandData.concat(brandData).map((img, index) => (
          <div key={index} className={styles.logo}>
            <Image src={img} alt="Partner Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandHomeOne;