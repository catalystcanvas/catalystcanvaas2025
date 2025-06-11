'use client';

import { gsap } from "gsap";
import { Power2 } from "gsap/gsap-core";

export function buttonAnimation() {
  // Ensure runs only in browser
  if (typeof window === "undefined") return;

  // Dynamically import jQuery only in browser
  const jQuery = require("jquery");
  const $ = jQuery;

  $(document).ready(() => {
    // Hover ripple animation
    $(".cs_hero_btn").on("mouseenter mouseout", function (e) {
      const x = e.pageX - $(this).offset().left;
      const y = e.pageY - $(this).offset().top;
      $(this).find("span").css({ top: y, left: x });
    });

    // Button move animation
    const all_btn = gsap.utils.toArray(".cs_round_btn_wrap");
    const all_btn_circle = gsap.utils.toArray(".cs_hero_btn");

    all_btn.forEach((btn, i) => {
      $(btn).on("mousemove", function (e) {
        parallaxIt(e, all_btn_circle[i], 80);
      });

      $(btn).on("mouseleave", function () {
        gsap.to(all_btn_circle[i], 0.5, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });

      function parallaxIt(e, target, movement) {
        const $this = $(btn);
        const relX = e.pageX - $this.offset().left;
        const relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }
    });
  });
}
