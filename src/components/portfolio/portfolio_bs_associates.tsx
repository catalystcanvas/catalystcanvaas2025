import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function BsAssociateShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Headings */}
        <h2 className={styles.heading}>Project Spotlight: BS Associate</h2>
        <h3 className={styles.subheading}>Empowering Business Compliance & Growth</h3>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>BS Associate</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Business Consultancy Platform</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>WordPress</span>
          </div>

          {/* Optional: Social links
          <div className={styles.socials}>
            <a href="#"><FaTwitter color="#1DA1F2" /></a>
            <a href="#"><FaFacebookF color="#1877F2" /></a>
            <a href="#"><FaLinkedinIn color="#0077B5" /></a>
            <a href="#"><FaPinterestP color="#E60023" /></a>
          </div>
          */}
        </aside>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.item1}>
            <img src="/assets/img/bs_home.png" alt="Showcase 1" />
          </div>
          <div className={styles.item2}>
            <img src="/assets/img/bs1.png" alt="Showcase 2" />
          </div>
          <div className={styles.item3}>
            <img src="/assets/img/bs2.png" alt="Showcase 3" />
          </div>
          {/* <div className={styles.item4}>
            <img src="/assets/img/portfolio_4.jpg" alt="Showcase 4" />
          </div> */}
        </div>

        {/* Main Content */}
        <div>
          <p className={`${styles.paragraph} ${styles.callout}`}>
            BS Associate is an all-encompassing business consultancy platform designed to cater to both emerging entrepreneurs and established enterprises. They offer a comprehensive range of services that include business registration, legal drafting, intellectual property registration, taxation, and compliance management.
          </p>
          <p className={styles.paragraph}>
            The platform goes beyond basic services by providing specialized offerings such as GST registration, FSSAI registration, MSME registration, PF/ESI registration, and RERA registration. To ensure complete regulatory compliance, clients can also consult with legal experts, chartered accountants, and company secretaries, ensuring every legal and financial requirement is met.
          </p>
          <p className={styles.paragraph}>
            With its intuitive interface, BS Associate makes navigating complex business compliance processes straightforward. The platform is built with the goal of allowing businesses to focus on what they do best—innovating and growing—while they handle the intricate details of legal and regulatory obligations.
          </p>
          <p className={styles.paragraph}>
            This project underscores our team's expertise in developing scalable, user-friendly web solutions that are customized to meet the unique needs of professional service providers like BS Associate.
          </p>
        </div>

      </div>
    </section>
  );
}
