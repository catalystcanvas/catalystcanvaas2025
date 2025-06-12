import { FaInstagram } from 'react-icons/fa6';
import styles from './DestinigoShowcase.module.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagramSquare } from 'react-icons/fa';

export default function DestinigoShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Headings */}
        <div style={{ gridColumn: 'span 2' }}>
          <h2 className={styles.heading}>Project Spotlight: DestiniGo</h2>
          <h3 className={styles.subheading}>Empowering Study Abroad Dreams</h3>
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          <h4 className={styles.sidebarTitle}>DestiniGo</h4>
          <div className={styles.paragraph}>
            <span className={styles.label}>Category</span><br />
            <span className={styles.value}>Educational Consultancy Website</span>
          </div>
          <div className={styles.paragraph}>
            <span className={styles.label}>Technology</span><br />
            <span className={styles.value}>Next.js, CSS Modules, Framer Motion</span>
          </div>
        </aside>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <div className={styles.item1}>
            <img src="/assets/img/destinigo_home.png" alt="Showcase 1" />
          </div>
          <div className={styles.item2}>
            <img src="/assets/img/destinigo1.png" alt="Showcase 2" />
          </div>
          <div className={styles.item3}>
            <img src="/assets/img/destinigo2.png" alt="Showcase 3" />
          </div>
          <div className={styles.item4}>
            <img src="/assets/img/destinigo3.png" alt="Showcase 4" />
          </div>
        </div>

        {/* Paragraphs Content */}
        <div style={{ gridColumn: 'span 2' }}>
          <p className={`${styles.paragraph} ${styles.callout}`}>
            At Destinigo, we’ve built a modern and easy-to-use platform that helps students find the right global education opportunities. Powered by <strong>Next.js</strong>, the website offers fast performance and works smoothly across all devices, ensuring users always have a seamless experience.
          </p>
          <p className={styles.paragraph}>
            We wanted to make it easy for students to find their way through the process of choosing an educational path abroad. That's why we added dynamic filters for countries and courses, so users can quickly narrow down their options. On top of that, we designed detailed consultation forms to make it easy for students to reach out and for consultants to capture leads efficiently.
          </p>
          <p className={styles.paragraph}>
            One of the things that makes this platform special is the use of <strong>Framer Motion</strong> for smooth animations that guide users with feedback modals. It’s all about keeping users engaged and informed throughout their journey. And it’s not just about looking good — we’ve made sure the platform loads fast, is optimized for search engines, and is accessible to everyone.
          </p>
          <p className={styles.paragraph}>
            What really sets Destinigo apart is its user-centered design. We’ve created personalized sections to help students and parents make informed decisions about studying abroad. The platform includes comprehensive country-specific study programs, detailing available courses, universities, and visa processes. All the information is clear and easy to follow, making the search for the right academic path as simple as possible.
          </p>
          <p className={styles.paragraph}>
            This project showcases our team’s skills in building scalable, fast, and visually appealing websites. Our developers and designers worked hand-in-hand to create a responsive, user-friendly interface that adapts perfectly to any device, whether it’s a phone, tablet, or computer. We focused on making the entire experience smooth, intuitive, and professional, from start to finish.
          </p>
          <p className={styles.paragraph}>
            This platform is not just a website; it’s a tool that will help shape the future of education. At Destinigo, we’re proud to have built a solution that helps students navigate their academic journeys and pursue their dreams on a global scale.
          </p>
        </div>
      </div>
    </section>
  );
}
