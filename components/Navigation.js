import { Collapse } from 'reactstrap';

const navbarLinks = [
    {
        scrollTo: 'portfolio',
        text: 'Portfolio',
    },
    {
        scrollTo: 'about',
        text: 'About',
    },
    {
        scrollTo: 'contact',
        text: 'Contact',
    },
];

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
                <i className="fas fa-bars"></i>
            </button>
            <Collapse
                className="navbar-collapse"
                id="navbarResponsive"
                isOpen={isNavbarOpen}
            >
                <ul className="navbar-nav ml-auto">
                    {
                        navbarLinks.map((navbarLink, idx) => (
                            <li
                                className="nav-item mx-0 mx-lg-1"
                                key={`navbar_list_item_${idx}`}
                            >
                                <a
                                    className="nav-link py-3 px-0 px-lg-3 rounded"
                                    href={navbarLink.href ? navbarLink.href : '#'+navbarLink.scrollTo}
                                    data-scroll-to={navbarLink.scrollTo}
                                    onClick={onNavigationItemClick}
                                >
                                    {navbarLink.text}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </Collapse>
        </div>
    </nav>
);

export default Navigation;
