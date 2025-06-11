import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

export default function ClearbotShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div style={{ gridColumn: 'span 2' }}>
          <h2 className={styles.heading}>Project Spotlight: Clearbot</h2>
          <h3 className={styles.subheading}>AI-Powered Autonomous Marine Cleanup</h3>

          <p className={`${styles.paragraph} ${styles.callout}`}>
            Clearbot is a fleet of electric, autonomous boats engineered to collect trash, hyacinth, and marine debris from rivers, harbours, and ports — all while generating real-time AI-driven data for environmental stakeholders.
          </p>

          <p className={styles.paragraph}>
            Ideal for municipalities and port authorities, Clearbot offers multi-class vessels (Class 2, Class 3, Alligator) that automate trash collection in all conditions — capturing up to 500 kg per mission — and provide GPS/GIS data and ESG-ready reports.
          </p>

          <p className={styles.paragraph}>
            <strong>Challenges Faced:</strong> Webflow's CMS didn’t support live data streams, and the multi-variant vessel specifications demanded dynamic interactivity. Additionally, interactive AI dashboards were beyond Webflow’s native capabilities.
          </p>

          <p className={styles.paragraph}>
            <strong>Solutions Implemented:</strong> Integrated lightweight Vue.js components via custom embeds to power dynamic boat comparisons and spec filters. Real-time sensor data and ESG metrics were fed through embedded charts using Chart.js and WebSocket connections to display mission stats live. All content remained remotely managed via Webflow CMS.
          </p>

          <p className={styles.paragraph}>
            The final site is visually engaging, interactive, and data-driven — demonstrating a robust Webflow extension strategy that brings complex autonomous vehicle tech online.
          </p>
        </div>

        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>Project Information</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Environmental Robotics / Webflow Dev</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Webflow, Vue.js, Chart.js, WebSockets</span>
          </div>

        </aside>
      </div>

      <div className={styles.imageGrid}>
        <div className={styles.item1}>
          <img src="/assets/img/clearbot_home.png" alt="Clearbot fleet" />
        </div>
        <div className={styles.item2}>
          <img src="/assets/img/clearbot1.png" alt="AI data dashboard" />
        </div>
        <div className={styles.item3}>
          <img src="/assets/img/clearbot2.png" alt="Clearbot Class 2 vessel" />
        </div>
        {/* <div className={styles.item4}>
          <img src="/assets/img/clearbot_alligator.jpg" alt="Clearbot Alligator for hyacinth removal" />
        </div> */}
      </div>
    </section>
  );
}
