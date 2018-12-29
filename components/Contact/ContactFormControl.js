const ContactFormControl = ({
    name,
    onInputChange,
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
            onChange={onInputChange}
            value={value}
            required="required"
            data-validation-required-message={`Please enter your ${name}.`}
        />
    );
};

export default ContactFormControl;
