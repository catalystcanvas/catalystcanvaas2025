'use client';

import { useEffect } from "react";  
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

import animationTitle from "@/utils/animationTitle";
import DarkLight from "@/components/common/DarkLight";
import MouseMove from "@/components/common/MouseMove";
import ScrollToTop from "@/components/common/ScrollToTop";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const Wrapper = ({ children }: any) => {  

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize ScrollSmoother
      ScrollSmoother.create({
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Initialize animations
      buttonAnimation();
      animationTitle();
      scrollSmother();
    }
  }, []);

  return <>
    <MouseMove />
    {children}
    <ScrollToTop />
    <DarkLight />

  </>;
};

export default Wrapper;

