import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function TenExchangeShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Headings */}
        <h2 className={styles.heading}>Project Spotlight: 10 Exchange Place</h2>
        <h3 className={styles.subheading}>Webflow-Powered Website for Jersey City's Iconic Commercial Hub</h3>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>10 Exchange Place</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Commercial Real Estate / Webflow Development</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Webflow, JavaScript, Google Maps API, HubSpot Integration</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Live Website</span><br />
            <a href="https://www.10exchange.com/" className={styles.value} target="_blank" rel="noopener noreferrer">10exchange.com</a>
          </div>
        </aside>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.item1}>
            <img src="/assets/img/exchange_home.png" alt="10 Exchange Exterior" />
          </div>
          <div className={styles.item2}>
            <img src="/assets/img/exchange1.png" alt="10 Exchange Lobby" />
          </div>
          <div className={styles.item3}>
            <img src="/assets/img/exchange2.png" alt="View from 10 Exchange" />
          </div>
          <div className={styles.item4}>
            <img src="/assets/img/exchange3.png" alt="Custom Map Integration" />
          </div>
        </div>

        {/* Main Paragraph Content */}
        <div>
          <p className={`${styles.paragraph} ${styles.callout}`}>
            10 Exchange Place is a 30-story architectural marvel on Jersey City’s waterfront, offering breathtaking views of Manhattan. The project aimed to reflect its prestige through a modern, high-performance digital presence — and Webflow provided the perfect platform to deliver a seamless, CMS-powered experience.
          </p>

          <p className={styles.paragraph}>
            As part of the website development, our objective was to craft an elegant, responsive interface that showcased the building’s amenities, location benefits, leasing information, and immersive visuals. Webflow enabled rapid prototyping and pixel-perfect design implementation — crucial for conveying the luxury and scale of 10 Exchange Place.
          </p>

          <p className={styles.paragraph}>
            <strong>Challenges Faced:</strong> During development, we encountered performance bottlenecks due to high-resolution image galleries, as well as limitations in Webflow’s native form handling and SEO structure. Additionally, integrating a custom map experience and third-party leasing contact forms required creative workarounds within Webflow’s designer.
          </p>

          <p className={styles.paragraph}>
            <strong>Solutions Implemented:</strong> We optimized image assets using WebP format and lazy loading to ensure fast load times. For advanced form tracking and CRM integration, we embedded a custom JavaScript-based solution connected to HubSpot. To improve SEO structure, custom meta tags and dynamic Open Graph previews were implemented via Webflow’s CMS. For the map, we used a custom embed with styled Google Maps integration.
          </p>

          <p className={styles.paragraph}>
            The final site is fast, mobile-optimized, visually stunning, and fully responsive across all devices. It captures the building’s luxury, professionalism, and prime location — while solving Webflow's platform limitations through strategic enhancements.
          </p>
        </div>

      </div>
    </section>
  );
}
