import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MouseMove = () => {
  
  const mousemoveHandler = (e: any) => {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".cs_cursor_1", {
        ease: "power2.out",
        duration: 0.1
      }).to(
        ".cs_cursor_2",
        {
          ease: "power2.out",
          duration: 0.1
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Hide cursor on mobile devices
    if (window.innerWidth <= 1200) {
      return;
    }
    
    document.addEventListener("mousemove", mousemoveHandler);
    
    // Add hover effect for clickable elements
    const clickableElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(".cs_cursor_1", {
          scale: 1.5,
          duration: 0.3
        });
        gsap.to(".cs_cursor_2", {
          scale: 1.5,
          duration: 0.3
        });
      });
      
      element.addEventListener('mouseleave', () => {
        gsap.to(".cs_cursor_1", {
          scale: 1,
          duration: 0.3
        });
        gsap.to(".cs_cursor_2", {
          scale: 1,
          duration: 0.3
        });
      });
    });

    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);

  return (
    <>
      <div className="cs_cursor_1"></div>
      <div className="cs_cursor_2"></div>
    </>
  );
};

export default MouseMove;