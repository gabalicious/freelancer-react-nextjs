import PropTypes from 'prop-types';

const ContactFormControl = ({
    name,
    onInputBlur,
    onInputChange,
    onInputFocus,
    placeholder,
    type,
    value,
}) => {
    if(type === 'textarea') {
        return (
            <textarea
                className="form-control"
                id={name}
                name={name}
                rows="5"
                placeholder={placeholder}
                onChange={onInputChange}
                onBlur={onInputBlur}
                onFocus={onInputFocus}
                value={value}
                required="required"
                data-validation-required-message={`Please enter a ${name}.`}
            ></textarea>
        );
    }

    return (
        <input
            className="form-control"
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onBlur={onInputBlur}
            onChange={onInputChange}
            onFocus={onInputFocus}
            value={value}
            required="required"
            data-validation-required-message={`Please enter your ${name}.`}
        />
    );
};

ContactFormControl.propTypes = {
    name: PropTypes.string,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    onInputFocus: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default ContactFormControl;
