const ContactFormControl = ({
    name,
    placeholder,
    type,
}) => {
    if(type === 'textarea') {
        return (
            <textarea
                className="form-control"
                id={name}
                rows="5"
                placeholder={placeholder}
                required="required"
                data-validation-required-message={`Please enter a ${name}.`}
            ></textarea>
        );
    }

    return (
        <input
            className="form-control"
            id={name}
            type={type}
            placeholder={placeholder}
            required="required"
            data-validation-required-message={`Please enter your ${name}.`}
        />
    );
};

export default ContactFormControl;
