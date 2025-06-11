import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function PrepawShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div style={{ gridColumn: 'span 2' }}>
          <h2 className={styles.heading}>Project Spotlight: PrePaw</h2>
          <h3 className={styles.subheading}>Revolutionizing At-Home Pet Grooming</h3>
          <p className={`${styles.paragraph} ${styles.callout}`}> PrePaw is revolutionizing the pet grooming experience with its innovative solutions, designed to make the process as comfortable as possible for both pets and owners. Their low-noise, mess-free vacuum kits capture 99% of loose hair, reducing the usual stress and mess associated with grooming. These products aim to make pet care more enjoyable and manageable, with the convenience that pet owners seek. </p> <p className={styles.paragraph}> The range of multifunctional grooming kits includes trimmers, nail grinders, and HEPA filters, each engineered for efficiency and ease of use. These thoughtful designs allow for a smoother, faster grooming routine, providing a safer and more comfortable experience for pets. PrePaw’s commitment to quality has earned them a reputation as a trusted brand among pet owners, providing grooming tools that are both practical and reliable. </p> <p className={styles.paragraph}> Our collaboration on this project demonstrates our ability to build scalable, user-centric e-commerce websites that cater to the unique needs of the pet care industry. The platform not only showcases PrePaw’s innovative products but also provides a seamless online shopping experience, allowing customers to easily explore and purchase grooming solutions that will enhance their pets’ well-being. </p>
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>Project Information</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>E-commerce / Pet Grooming Products</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Shopify</span>
          </div>

          {/* <div className={styles.socials}>
            <a href="#"><FaTwitter color="#1DA1F2" /></a>
            <a href="#"><FaFacebookF color="#1877F2" /></a>
            <a href="#"><FaLinkedinIn color="#0077B5" /></a>
            <a href="#"><FaPinterestP color="#E60023" /></a>
          </div> */}
        </aside>
      </div>
      {/* Image Grid */}
      <div className={styles.imageGrid}>
  <div className={styles.item1}>
    <img src="/assets/img/prepaw_home.png" alt="Showcase 1" />
  </div>
  <div className={styles.item2}>
    <img src="/assets/img/prepaw1.png" alt="Showcase 2" />
  </div>
  <div className={styles.item3}>
    <img src="/assets/img/prepaw2.png" alt="Showcase 3" />
  </div>
  <div className={styles.item4}>
    <img src="/assets/img/prepaw3.png" alt="Showcase 4" />
  </div>
</div>
    </section>
  );
}
