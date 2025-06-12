import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function TotalVisionShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Headings */}
        <h2 className={styles.heading}>Project Spotlight: Total Vision Services</h2>
        <h3 className={styles.subheading}>Streamlined Online Experience for Vision Benefit Plans</h3>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>Total Vision Services</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Healthcare / Webflow Dev</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Webflow</span>
          </div>
        </aside>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.item1}>
            <img src="/assets/img/totalvision_home.png" alt="Total Vision homepage" />
          </div>
          <div className={styles.item2}>
            <img src="/assets/img/totalvision1.png" alt="Plan comparison table" />
          </div>
          <div className={styles.item3}>
            <img src="/assets/img/totalvision2.png" alt="Provider locator search" />
          </div>
          <div className={styles.item4}>
            <img src="/assets/img/totalvision3.png" alt="Contact form integration" />
          </div>
        </div>

        {/* Main Content Paragraphs */}
        <div>
          <p className={`${styles.paragraph} ${styles.callout}`}>
            Total Vision Services provides discount vision plans and non‑insured healthcare benefits through a network of over 12,000 providers — serving individuals, families, and businesses since 1988.
          </p>

          <p className={styles.paragraph}>
            The Webflow redesign focused on clear navigation for vision plan options, provider locators, and streamlined contact forms — improving UX for both potential clients and existing members.
          </p>

          <p className={styles.paragraph}>
            <strong>Challenges Faced:</strong> Client requests included integrating an interactive ZIP‑based provider finder, complex plan data tables, and tracking incoming plan enrollments with payment handling — all within Webflow’s static environment.
          </p>

          <p className={styles.paragraph}>
            <strong>Solutions Implemented:</strong> Embedded a JavaScript‑powered ZIP‑search widget using the provider API for real‑time results. Merchant options like InstaMed were integrated via custom code snippets in form embeds. And dynamic plan tables were built using Webflow CMS collections with conditional visibility toggles.
          </p>

          <p className={styles.paragraph}>
            The result is a professional, accessible, and fully responsive website that simplifies plan discovery, provider location, and enrollment — all while maintaining Webflow’s CMS-driven workflow.
          </p>
        </div>

      </div>
    </section>
  );
}
