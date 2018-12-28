import { Component } from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import About from '../components/About';
import Contact from '../components/Contact';
import Copyright from '../components/Copyright';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import ScrollToTop from '../components/ScrollToTop';
import '../scss/style.scss';

export default class Index extends Component {
    state = {
        isNavbarOpen: false,
        isNavbarShrunk: false,
        isScrollToTopVisible: false,
    };

    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        this.onNavbarTogglerClick = this.onNavbarTogglerClick.bind(this);
        this.onNavigationItemClick = this.onNavigationItemClick.bind(this);
    }

    handleScroll(evt) {
        this.setState({
            isNavbarShrunk: window.pageYOffset > 100,
            isScrollToTopVisible: window.pageYOffset > 100,
        });
    }

    onNavbarTogglerClick(evt) {
        const { isNavbarOpen } = this.state;

        evt.preventDefault();

        this.setState({
            isNavbarOpen: !isNavbarOpen,
        });
    }

    onNavigationItemClick(evt) {
        const scrollTo = evt.target.getAttribute('data-scroll-to');

        evt.preventDefault();

        // We want to close the navbar when we scroll/navigate away
        this.setState({
            isNavbarOpen: false,
        });

        if(scrollTo === 'page-top') {
            scroll.scrollToTop();
            return;
        }

        scroller.scrollTo(scrollTo, {
            smooth: true,
            offset: -50,
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const {
            isNavbarOpen,
            isNavbarShrunk,
            isScrollToTopVisible,
        } = this.state;

        return (
            <>
                <Navigation
                    isNavbarOpen={isNavbarOpen}
                    isNavbarShrunk={isNavbarShrunk}
                    onNavbarTogglerClick={this.onNavbarTogglerClick}
                    onNavigationItemClick={this.onNavigationItemClick}
                />
                <Header />
                <Element name="portfolio">
                    <Portfolio />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
                <Footer />
                <Copyright />
                <ScrollToTop
                    onClick={this.onNavigationItemClick}
                    isVisible={isScrollToTopVisible}
                />
            </>
        );
    }
}
