import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const navbarLinks = [
  {
    scrollTo: "portfolio",
    text: "Portfolio",
  },
  {
    scrollTo: "about",
    text: "About",
  },
  {
    scrollTo: "contact",
    text: "Contact",
  },
];

const Navigation = ({
  isNavbarOpen,
  isNavbarShrunk,
  onNavbarTogglerClick,
  onScrollToTopClick,
}) => (
  <nav
    className={`navbar navbar-expand-lg bg-secondary fixed-top text-uppercase ${
      isNavbarShrunk ? "navbar-shrink" : ""
    }`}
    id="mainNav"
  >
    <div className="container">
      <a className="navbar-brand" href="#page-top" onClick={onScrollToTopClick}>
        Gaba.codes
      </a>
      <button
        className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={onNavbarTogglerClick}
      >
        Menu <i className="fas fa-bars"></i>
      </button>
      <Collapse
        className="navbar-collapse"
        id="navbarResponsive"
        isOpen={isNavbarOpen}
      >
        <ul className="navbar-nav ml-auto">
          {navbarLinks.map((navbarLink, idx) => (
            <li
              className="nav-item mx-0 mx-lg-1"
              key={`navbar_list_item_${idx}`}
            >
              <Link
                activeClass="active"
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href={
                  navbarLink.href ? navbarLink.href : "#" + navbarLink.scrollTo
                }
                to={navbarLink.scrollTo}
                smooth={true}
                spy={true}
                hashSpy={true}
                offset={-50}
                isDynamic={true}
              >
                {navbarLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  </nav>
);

// data-scroll-to={navbarLink.scrollTo}
// onClick={onScrollToTopClick}

Navigation.propTypes = {
  isNavbarOpen: PropTypes.bool,
  isNavbarShrunk: PropTypes.bool,
  onNavbarTogglerClick: PropTypes.func,
  onScrollToTopClick: PropTypes.func,
};

export default Navigation;
