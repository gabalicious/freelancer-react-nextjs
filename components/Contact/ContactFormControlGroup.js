import PropTypes from 'prop-types';
import ContactFormControl from './ContactFormControl';

const ContactFormControlGroup = ({
    errors,
    isFocused,
    labelText,
    name,
    onInputBlur,
    onInputChange,
    onInputFocus,
    placeholder,
    type,
    value,
}) => {
    let formGroupClassName = 'form-group floating-label-form-group controls mb-0 pb-2';
    if(value && value.length > 0) {
        formGroupClassName = formGroupClassName + ' floating-label-form-group-with-value';
    }
    if(isFocused) {
        formGroupClassName = formGroupClassName + ' floating-label-form-group-with-focus';
    }

    // console.log(formGroupClassName);

    return (
        <div className="control-group">
            <div className={formGroupClassName}>
                <label>{labelText}</label>
                <ContactFormControl
                    type={type}
                    name={name}
                    onInputBlur={onInputBlur}
                    onInputFocus={onInputFocus}
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
}

ContactFormControlGroup.propTypes = {
    errors: PropTypes.array,
    isFocused: PropTypes.bool,
    labelText: PropTypes.string,
    name: PropTypes.string,
    onInputBlur: PropTypes.func,
    onInputChange: PropTypes.func,
    onInputFocus: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default ContactFormControlGroup;
