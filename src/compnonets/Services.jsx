import { useMemo, useState } from "react";
import {
  courses,
  recommendationGoals,
  services,
  siteConfig,
} from "../data/siteData";

const Services = () => {
  const [goal, setGoal] = useState("career");

  const recommendedCourse = useMemo(() => {
    return courses.find((course) => course.goal === goal) || courses[0];
  }, [goal]);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-grid">
          <div>
            <p className="section-kicker">
              Services and courses
            </p>
            <h2>
              Simple course tracks managed from clean React data.
            </h2>
            <p className="section-text">
              Choose a goal and the website recommends a course using a small
              matching algorithm. Course details, languages, and services are
              all handled from one data file.
            </p>

            <div className="language-list">
              {siteConfig.languages.map((language) => (
                <span
                  key={language}
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="recommend-card">
            <div className="goal-tabs">
              {recommendationGoals.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setGoal(item.value)}
                  className={goal === item.value ? "active" : ""}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="recommended-course">
              <p>
                Recommended course
              </p>
              <h3>
                {recommendedCourse.title}
              </h3>
              <p>{recommendedCourse.summary}</p>
              <div className="course-meta">
                <span>
                  {recommendedCourse.level}
                </span>
                <span>
                  {recommendedCourse.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article
              key={course.title}
              className="course-card"
            >
              <div>
                <h3>{course.title}</h3>
                <span>
                  {course.duration}
                </span>
              </div>
              <p>{course.summary}</p>
            </article>
          ))}
        </div>

        <div className="service-list">
          {services.map((service) => (
            <div
              key={service}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
