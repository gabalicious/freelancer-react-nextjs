import ContactFormControl from './ContactFormControl';

const ContactFormControlGroup = ({
    errors,
    labelText,
    name,
    onInputChange,
    placeholder,
    type,
    value,
}) => (
    <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>{labelText}</label>
            <ContactFormControl
                type={type}
                name={name}
                onInputChange={onInputChange}
                value={value}
                placeholder={placeholder}
            />
            <p className="help-block text-danger">
                {
                    errors && errors.length > 0
                        ? <ul>
                            {errors.map((error, idx) => <li>{error}</li>)}
                        </ul>
                        : null
                }
            </p>
        </div>
    </div>
);

export default ContactFormControlGroup;
