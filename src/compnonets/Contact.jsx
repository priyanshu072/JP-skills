import { useMemo, useState } from "react";
import { courses, siteConfig } from "../data/siteData";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: courses[0].title,
    message: "",
  });

  const mailLink = useMemo(() => {
    const subject = `Admission inquiry for ${form.course}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Course: ${form.course}`,
      "",
      form.message || "I want course details and admission information.",
    ].join("\n");

    return `mailto:${siteConfig.adminEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>
            Send inquiries directly to the admin email.
          </h2>
          <p className="section-text">
            The contact form creates a ready email for{" "}
            <a
              className="text-link"
              href={`mailto:${siteConfig.adminEmail}`}
            >
              {siteConfig.adminEmail}
            </a>
            The website is a way to manage the document work load.
          </p>
          <div className="admin-box">
            <p>
              Admin panel
            </p>
            <span>
              Admissions and course inquiries are routed through email and
              WhatsApp, so class management starts without heavy setup.
            </span>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label className="block">
              <span>Name</span>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={updateField}
                placeholder="Student name"
              />
            </label>

            <label className="block">
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="student@email.com"
              />
            </label>
          </div>

          <label>
            <span>Course</span>
            <select
              name="course"
              value={form.course}
              onChange={updateField}
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
              rows="5"
              value={form.message}
              onChange={updateField}
              placeholder="Tell us your timing, language, and learning goal."
            />
          </label>

          <a
            href={mailLink}
            className="btn btn-dark"
          >
            Send to Admin Email
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
