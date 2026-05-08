import heroImage from "../assets/hero.png";
import { courses, siteConfig, stats } from "../data/siteData";

const Home = () => {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Skills for classes, career, business, and confidence
          </p>

          <h1>
            Learn AI tools, web development, and communication with modern
            practical classes.
          </h1>

          <p className="hero-text">
            {siteConfig.brand} helps students and business owners build useful
            digital skills through simple courses, live guidance, WhatsApp
            support, and website management training.
          </p>

          <div className="hero-actions">
            <a
              href="#services"
              className="btn btn-primary"
            >
              Explore Courses
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Contact for Admission
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div
                key={item.label}
                className="stat-card"
              >
                <div>{item.value}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          {/* <div className="floating-note">
            WhatsApp automation ready
          </div> */}
          <div className="image-frame">
            <img
              src={heroImage}
              alt="JP Skills online class learning dashboard"
            />
          </div>
          <div className="mini-course-grid">
            {courses.slice(0, 4).map((course) => (
              <div
                key={course.title}
                className="mini-course"
              >
                <p>{course.title}</p>
                <span>{course.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
