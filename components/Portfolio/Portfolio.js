import { Component, Fragment } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioModal from "./PortfolioModal";

const items = [
  {
    imgSrc: "/static/img/portfolio/django.png",
    linkHref: "#portfolio-modal-1",
    name: "modal1",
  },
  {
    imgSrc: "/static/img/portfolio/shopify.png",
    linkHref: "#portfolio-modal-2",
    name: "modal2",
  },
  {
    imgSrc: "/static/img/portfolio/rails.png",
    linkHref: "#portfolio-modal-3",
    name: "modal3",
  },
  {
    imgSrc: "/static/img/portfolio/stripe.png",
    linkHref: "#portfolio-modal-4",
    name: "modal4",
  },
  {
    imgSrc: "/static/img/portfolio/node.png",
    linkHref: "#portfolio-modal-5",
    name: "modal5",
  },
  {
    imgSrc: "/static/img/portfolio/support1.png",
    linkHref: "#portfolio-modal-6",
    name: "modal6",
  },
];

class Portfolio extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.togglePortfolioModal = this.togglePortfolioModal.bind(this);
  }

  togglePortfolioModal(evt) {
    const dataTarget = evt.target.getAttribute("data-target");

    console.log(evt.target);
    console.log(dataTarget);

    evt.preventDefault();

    if (dataTarget) {
      const dataTargetValue = this.state[dataTarget];

      this.setState({
        [dataTarget]: !dataTargetValue,
      });
    }
  }

  componentDidMount() {
    items.forEach((portfolioItem, idx) => {
      this.setState({
        [`${portfolioItem.name}_open`]: false,
      });
    });
  }

  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            {items.map((item, idx) => (
              <Fragment key={`portfolio_element_${idx}`}>
                <PortfolioItem
                  imgSrc={item.imgSrc}
                  linkHref={item.linkHref}
                  onClick={this.togglePortfolioModal}
                  dataTarget={`${item.name}_open`}
                />
                <PortfolioModal
                  dataTarget={`${item.name}_open`}
                  imgSrc={item.imgSrc}
                  isOpen={this.state[`${item.name}_open`]}
                  modalId={item.linkHref}
                  onClose={this.togglePortfolioModal}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
