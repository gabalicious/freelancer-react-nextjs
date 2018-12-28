import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const PortfolioModal = ({
    modalId,
    imgSrc,
}) => (
    <div className="portfolio-modal mfp-hide" id={modalId}>
        <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                <FontAwesomeIcon icon={faTimes} size="3x" />
            </a>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                        <hr className="star-dark mb-5" />
                        <img
                            className="img-fluid mb-5"
                            src={imgSrc}
                            alt=""
                        />
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae?
                            Reprehenderit soluta, eos quod consequuntur itaque. Nam.
                        </p>
                        <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                            <FontAwesomeIcon icon={faTimes} />
                            {' '}
                            Close Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioModal;
