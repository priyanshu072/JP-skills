import { useMemo, useState } from "react";
import { courses, siteConfig } from "../data/siteData";

const Whatsapp = () => {
  const [lead, setLead] = useState({
    name: "",
    course: courses[0].title,
    language: siteConfig.languages[0],
    message: siteConfig.whatsappDefaultMessage,
  });

  const whatsappUrl = useMemo(() => {
    const text = [
      `Name: ${lead.name || "New student"}`,
      `Course: ${lead.course}`,
      `Language: ${lead.language}`,
      "",
      lead.message,
    ].join("\n");

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
  }, [lead]);

  const updateLead = (event) => {
    setLead((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section className="whatsapp-section">
      <div className="container whatsapp-grid">
        <div>
          <p className="section-kicker light">
            WhatsApp automation
          </p>
          <h2>
            One click opens WhatsApp with all student details filled in.
          </h2>
         
        </div>

        <div className="whatsapp-card">
          <div className="form-row">
            <label>
              <span>Name</span>
              <input
                name="name"
                value={lead.name}
                onChange={updateLead}
                placeholder="Student name"
              />
            </label>

            <label>
              <span>Language</span>
              <select
                name="language"
                value={lead.language}
                onChange={updateLead}
              >
                {siteConfig.languages.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            <span>Course</span>
            <select
              name="course"
              value={lead.course}
              onChange={updateLead}
            >
              {courses.map((course) => (
                <option key={course.title}>{course.title}</option>
              ))}
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="4"
              value={lead.message}
              onChange={updateLead}
            />
          </label>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            Open WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default Whatsapp;
