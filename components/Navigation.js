import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'reactstrap';

const Navigation = ({
    isNavbarOpen,
    isNavbarShrunk,
    onNavbarTogglerClick,
    onNavigationItemClick,
}) => (
    <nav
        className={`navbar navbar-expand-lg bg-secondary fixed-top text-uppercase ${isNavbarShrunk ? 'navbar-shrink' : ''}`}
        id="mainNav"
    >
        <div className="container">
            <a
                className="navbar-brand"
                href="#page-top"
                data-scroll-to="page-top"
                onClick={onNavigationItemClick}
            >
                Start Bootstrap
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
                Menu
                {' '}
                <FontAwesomeIcon icon={faBars} />
            </button>
            <Collapse
                className="navbar-collapse"
                id="navbarResponsive"
                isOpen={isNavbarOpen}
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <a
                            className="nav-link py-3 px-0 px-lg-3 rounded"
                            href="#portfolio"
                            data-scroll-to="portfolio"
                            onClick={onNavigationItemClick}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a
                            className="nav-link py-3 px-0 px-lg-3 rounded"
                            href="#about"
                            data-scroll-to="about"
                            onClick={onNavigationItemClick}
                        >
                            About
                        </a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a
                            className="nav-link py-3 px-0 px-lg-3 rounded"
                            href="#contact"
                            data-scroll-to="contact"
                            onClick={onNavigationItemClick}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </Collapse>
        </div>
    </nav>
);

export default Navigation;
