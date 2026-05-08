import { navigation, siteConfig } from "../data/siteData";

const Navbar = () => {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">JP</span>
          <span>{siteConfig.brand}</span>
        </a>

        <div className="nav-links">
          {navigation.slice(0, 3).map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${siteConfig.adminEmail}`}
          className="nav-cta"
        >
          Admin Email
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
