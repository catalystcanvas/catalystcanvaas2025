import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function IntentneticShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div style={{ gridColumn: 'span 2' }}>
          <h2 className={styles.heading}>Project Spotlight: Intentnetic</h2>
          <h3 className={styles.subheading}>Driving Digital Growth with Precision</h3>
          <p className={`${styles.paragraph} ${styles.callout}`}> Intentnetic is a high-performance marketing agency founded by IIT and IIM alumni. With over 9 years of industry experience, the team has successfully managed over $200 million in ad spend, consistently delivering an impressive 5X ROI across more than 150 clients. </p> <p className={styles.paragraph}> Their expertise covers a wide range of services including PPC, social media marketing, content creation, A/B testing, conversion rate optimization, and Google Analytics 4. Intentnetic’s data-driven strategies are carefully tailored to each client’s specific goals, ensuring impactful and measurable results. </p> <p className={styles.paragraph}> Committed to transparency and continuous improvement, Intentnetic positions itself as an extension of your team, building long-term partnerships that drive success and foster sustained growth. </p> <p className={styles.paragraph}> This project highlights our collaboration with Intentnetic in designing a scalable, SEO-optimized, and visually captivating web presence that accurately reflects their leadership in the performance marketing industry. </p>
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>Project Information</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Performance Marketing Agency Website</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Next.js, CSS Modules, Framer Motion</span>
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
    <img src="/assets/img/intentnetic_home.png" alt="Showcase 1" />
  </div>
  <div className={styles.item2}>
    <img src="/assets/img/intentnetic1.png" alt="Showcase 2" />
  </div>
  <div className={styles.item3}>
    <img src="/assets/img/intentnetic2.png" alt="Showcase 3" />
  </div>
  {/* <div className={styles.item4}>
    <img src="/assets/img/intentnetic_4.pg" alt="Showcase 4" />
  </div> */}
</div>
    </section>
  );
}
