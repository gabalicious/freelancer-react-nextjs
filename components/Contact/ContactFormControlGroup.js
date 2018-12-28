import ContactFormControl from './ContactFormControl';

const ContactFormControlGroup = ({
    labelText,
    name,
    placeholder,
    type,
}) => (
    <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>{labelText}</label>
            <ContactFormControl
                type={type}
                name={name}
                placeholder={placeholder}
            />
            <p className="help-block text-danger"></p>
        </div>
    </div>
);

export default ContactFormControlGroup;
