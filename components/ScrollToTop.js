import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = ({
    onClick,
    isVisible,
}) => (
    <div
        className="scroll-to-top d-lg-none position-fixed"
        style={{
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? 'visible' : 'hidden',
            transition: '0.5s',
        }}
    >
        <a
            className=" d-block text-center text-white rounded"
            href="#page-top"
            data-scroll-to="page-top"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faChevronUp} />
        </a>
    </div>
);

export default ScrollToTop;
