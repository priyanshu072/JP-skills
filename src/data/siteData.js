export const siteConfig = {
  brand: "JP Skills",
  adminEmail: "jpskillsweb@gmail.com",
  whatsappNumber: "+917272970006",
  whatsappDefaultMessage:
    "Hello JP Skills, I want to know about your courses.",
  languages: ["English", "Hindi"],
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Admin", href: `mailto:${siteConfig.adminEmail}` },
];

export const courses = [
  {
    title: "AI Tools",
    level: "Beginner friendly",
    duration: "6 months",
    goal: "automation",
    summary: "Use modern AI tools for study, business, content, and daily work.",
  },
  {
    title: "Web Development",
    level: "Beginner to project",
    duration: "6 months",
    goal: "career",
    summary: "Learn HTML, CSS, JavaScript, React, hosting, and portfolio building.",
  },
  {
    title: "Communication Skills",
    level: "Practical speaking",
    duration: "3 months",
    goal: "confidence",
    summary: "Improve speaking, interviews, presentations, and workplace English.",
  },
  {
    title: "Website Making",
    level: "Launch ready",
    duration: "6 months",
    goal: "business",
    summary: "Build clean websites for shops, classes, freelancers, and services.",
  },
  {
    title: "Website Managing",
    level: "Maintenance skills",
    duration: "6 months",
    goal: "business",
    summary: "Update content, manage forms, improve speed, and handle basic SEO.",
  },
];

export const services = [
  "Live classes",
  "Small batch mentorship",
  "Project based learning",
  "Mobile friendly notes",
  "WhatsApp doubt support",
  "Website setup guidance",
];

export const stats = [
  { value: "5+", label: "course tracks" },
  { value: "6", label: "learning languages" },
  { value: "1:1", label: "guidance options" },
];

export const recommendationGoals = [
  { label: "Career", value: "career" },
  { label: "Business", value: "business" },
  { label: "Confidence", value: "confidence" },
  { label: "Automation", value: "automation" },
];
