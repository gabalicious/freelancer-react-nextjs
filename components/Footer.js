const socialLinks = [
  {
    iconClassName: "fa-facebook-f",
    href: "#",
  },
  {
    iconClassName: "fa-google-plus-g",
    href: "#",
  },
  {
    iconClassName: "fa-twitter",
    href: "#",
  },
  {
    iconClassName: "fa-linkedin-in",
    href: "#",
  },
  {
    iconClassName: "fa-dribbble",
    href: "#",
  },
];

const Footer = () => (
  <footer className="footer text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4"></h4>
          <p className="lead mb-0"></p>
        </div>
        <div className="col-md-4 mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">Around the Web</h4>
          <ul className="list-inline mb-0">
            {socialLinks.map((socialLink, idx) => (
              <li className="list-inline-item" key={`social_link_${idx}`}>
                <a
                  className="btn btn-outline-light btn-social text-center rounded-circle"
                  href={socialLink.href}
                >
                  <i className={`fab ${socialLink.iconClassName}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="text-uppercase mb-4"></h4>
          <p className="lead mb-0"></p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
