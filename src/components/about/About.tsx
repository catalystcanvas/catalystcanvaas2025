 

import React from 'react';
import agency_story_1 from "@/assets/img/agency_story_1.jpg"
import agency_story_2 from "@/assets/img/agency_story_2.jpg"
import agency_story_4 from "@/assets/img/agency_story_4.jpg"
import agency_story_3 from "@/assets/img/agency_story_3.jpg"
import Image from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  // des: string;
}
const about_content: DataType = {
  subtitle: `Our Agency Story`,
  title: `How Our Agency is Pushing the Boundaries of Online Marketing and Design`,
//   des: `We are a purpose-driven digital agency committed to empowering businesses to excel in the ever-evolving digital landscape. Whether you're an emerging startup or a well-established enterprise, we partner with you to transform your online presence through intelligent strategy, captivating design, and powerful technology. Our comprehensive services—ranging from bespoke website development to results-oriented digital marketing—are crafted to align with your vision and deliver measurable growth.
// In a marketplace where digital relevance is critical, we don’t just build websites—we create seamless, engaging digital experiences that resonate with your audience and inspire action. By blending creative excellence with analytical precision, we help brands break through the noise, build trust, and drive lasting impact. Together, let’s redefine what success looks like in the digital age and position your business for sustained, scalable growth.`,
}
const { subtitle, title,} = about_content

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                  <p className="cs_ternary_color">
    We are a digital agency focused on helping businesses grow and succeed online. Whether you're just starting out or already well-established, we work with you to improve your online presence using smart planning, creative design, and the latest technology. From building custom websites to running effective online marketing campaigns, we offer complete services that support your goals and deliver real results.
  </p>
  <p className="cs_ternary_color">
    In today's fast-moving digital world, it's not enough to just have a website—we create smooth and attractive online experiences that connect with your audience and encourage them to take action. With a mix of creativity and data-driven strategies, we help your brand stand out, earn trust, and grow. Let’s work together to shape your digital success and build a strong future for your business.
  </p>

                    
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div className="cs_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image src={agency_story_3} className="w-100" alt="image-here" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;