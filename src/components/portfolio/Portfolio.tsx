'use client'

import React /*, { useState }*/ from 'react';
// import portfolio_data from '@/data/portfolio_data';

import { StaticImageData } from 'next/image';


import portfolio_img_1 from '@/assets/img/portfolio_1.jpg';
import portfolio_img_2 from '@/assets/img/portfolio_2.jpg';
import portfolio_img_3 from '@/assets/img/portfolio_3.jpg';

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  path: string; // NEW
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: 'UI Design',
    img: portfolio_img_1,
    title: "DestiniGo",
    path: "/destinigo_project"
  },
  {
    id: 2,
    category: 'UX Design',
    img: portfolio_img_2,
    title: "Intentnetic",
    path: "/intentnetic_project"
  },
  {
    id: 3,
    category: 'Development',
    img: portfolio_img_3,
    title: "Bs Associates",
    path: "/bs_associates_project"
  },
  {
    id: 4,
    category: 'Development',
    img: portfolio_img_3,
    title: "Prepaw",
    path: "/prepaw_project"
  }
];



// Category filtering (disabled)
/*
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];

const [activeCategory, setActiveCategory] = useState("All");
const [items, setItems] = useState(portfolio_data);

const filterItems = (cateItem: string) => {
  setActiveCategory(cateItem);
  if (cateItem === "All") {
    return setItems(portfolio_data);
  } else {
    const findItems = portfolio_data.filter((findItem) => {
      return findItem.category == cateItem;
    });
    setItems(findItems);
  }
};
*/

const Portfolio = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Some Recent Project We Successfully Done
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="cs_height_50 cs_height_lg_25"></div> */}
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              {/* Category Filter Menu (Disabled) */}
              {/*
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>{' '}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              */}
            </div>

            {/* <div className="cs_isotop_items_details row">
            {portfolio_data.map((item, i) => (
  <div key={i} className="col-md-4 cs_item cs_ui_design cs_development">
    <Link href={item.path} className="cs_portfolio cs_style_1">
      <div className="cs_portfolio_img">
        <Image src={item.img} className="img-fluid" alt="Thumb" />
      </div>
      <div className="cs_portfolio_overlay"></div>
      <div className="cs_portfolio_info">
        <h2 className="cs_portfolio_title">{item.title}</h2>
      </div>
    </Link>
  </div>
))}


            </div> */}
          </div>

          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              {/* <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
