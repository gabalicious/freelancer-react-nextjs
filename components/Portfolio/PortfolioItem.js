const PortfolioItem = ({
    imgSrc,
    linkHref,
    onClick,
    dataTarget,
}) => (
    <div className="col-md-6 col-lg-4">
        <a
            className="portfolio-item d-block mx-auto"
            href={linkHref}
            data-target={dataTarget}
            onClick={onClick}
        >
            <div
                className="portfolio-item-caption d-flex position-absolute h-100 w-100"
                data-target={dataTarget}
                onClick={onClick}
            >
                <div
                    className="portfolio-item-caption-content my-auto w-100 text-center text-white"
                    data-target={dataTarget}
                    onClick={onClick}
                >
                    <i
                        className="fas fa-fw fa-search-plus fa-3x"
                        data-target={dataTarget}
                        onClick={onClick}
                    ></i>
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
