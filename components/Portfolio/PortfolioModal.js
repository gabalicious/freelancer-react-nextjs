import { Modal, ModalBody } from 'reactstrap';

const PortfolioModal = ({
    dataTarget,
    imgSrc,
    isOpen,
    modalId,
    onClose,
}) => (
    <Modal isOpen={isOpen} size="xl" className="portfolio-modal">
        <ModalBody className="portfolio-modal-dialog bg-white">
            <a
                className="close-button d-none d-md-block portfolio-modal-dismiss"
                href="#"
                data-target={dataTarget}
                onClick={onClose}
            >
                <i
                    className="fas fa-times fa-3x"
                    data-target={dataTarget}
                    onClick={onClose}
                ></i>
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
                        <a
                            className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss"
                            href="#"
                            data-target={dataTarget}
                            onClick={onClose}
                        >
                            <i
                                className="fas fa-times"
                                data-target={dataTarget}
                                onClick={onClose}
                            ></i>
                            {' '}
                            Close Project
                        </a>
                    </div>
                </div>
            </div>
        </ModalBody>
    </Modal>
);
// <div className="portfolio-modal mfp-hide" id={modalId}>
// </div>

export default PortfolioModal;
