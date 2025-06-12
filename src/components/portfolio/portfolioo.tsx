// components/PortfolioProjects.jsx
import React, { useState } from 'react';
import styles from './PortfolioProjects.module.css';
import Link from 'next/link';

import portfolio_img_1 from '@/assets/img/portfolio_1.jpg';
import portfolio_img_2 from '@/assets/img/portfolio_2.jpg';
import portfolio_img_3 from '@/assets/img/portfolio_3.jpg';

const projectsData = [
  {
    title: 'DestiniGo',
    image: '/assets/img/portfolio_1.jpg',
    link: "/destinigo_project"
  },{
    title: '10exchange',
    image: '/assets/img/portfolio_5.jpg',
    link: "/exchange_project"
  },
  {
    title: 'B S Advocate',
    image: '/assets/img/portfolio_3.jpg',
    link: "/bs_associates_project"
  },{
    title: 'ToatalVision',
    image: '/assets/img/portfolio_6.png',
    link: "/totalvision_project"
  },{
    title: 'Clearbot',
    image: '/assets/img/portfolio_7.png',
    link: "/clearbot_project"
  },
  {
    title: 'Prepaw',
    image: '/assets/img/portfolio_4.jpg',
    link: "/prepaw_project"
  },
  {
    title: 'Intentnetic',
    image: '/assets/img/portfolio_2.jpg',
    link: "/intentnetic_project"
  },
  
  // {
  //   title: 'Extra Project 1',
  //   image: '/images/extra1.png',
  //   link: '/projects/extra1'
  // },
  // {
  //   title: 'Extra Project 2',
  //   image: '/images/extra2.png',
  //   link: '/projects/extra2'
  // },
  // {
  //   title: 'Extra Project 3',
  //   image: '/images/extra3.png',
  //   link: '/projects/extra3'
  // },
];

const PortfolioProjects = () => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <Link href={project.link} key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
