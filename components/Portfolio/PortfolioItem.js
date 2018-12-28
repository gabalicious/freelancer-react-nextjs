import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const PortfolioItem = ({
    imgSrc,
    linkHref,
}) => (
    <div className="col-md-6 col-lg-4">
        <a
            className="portfolio-item d-block mx-auto"
            href={linkHref}
        >
            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <FontAwesomeIcon fixedWidth icon={faSearchPlus} size="3x" />
                </div>
            </div>
            <img
                className="img-fluid"
                src={imgSrc}
                alt=""
            />
        </a>
    </div>
);

export default PortfolioItem;
