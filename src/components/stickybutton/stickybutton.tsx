"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./StickyWidgets.module.css";

import ReactDOM from "react-dom";



const StickyWidgets = () => {
  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient &&
  ReactDOM.createPortal(
    <motion.a
      href="https://wa.me/7665127830"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <img src="assets/img/whatsapp.webp" alt="WhatsApp" className={styles.whatsappIcon} />
    </motion.a>,
    document.body
  )}
      
    </>
  );
};

export default StickyWidgets;
