import { Component } from 'react';
import * as yup from 'yup';
import {
    getValuesFromFormResource,
    getValidationSchemaFromFormResource,
    updateFormResourceFromErrors,
} from '../../helpers/formResources';
import ContactFormControlGroup from './ContactFormControlGroup';

const formControls = [
    {
        isFocused: false,
        labelText: 'Name',
        name: 'name',
        placeholder: 'Name',
        type: 'text',
        value: '',
        errors: [],
        rules: yup.string()
            .required()
            .max(255),
    },
    {
        isFocused: false,
        labelText: 'Email',
        name: 'email',
        placeholder: 'Email Address',
        type: 'email',
        value: '',
        errors: [],
        rules: yup.string()
            .required()
            .email()
            .max(255),
    },
    {
        isFocused: false,
        labelText: 'Phone Number',
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone Number',
        value: '',
        errors: [],
        rules: yup.string()
            .required()
            .max(255),
    },
    {
        isFocused: false,
        labelText: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Message',
        value: '',
        errors: [],
        rules: yup.string()
            .required(),
    },
];

class Contact extends Component {
    state = {
        formControls: [...formControls],
    };

    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.setIsFocused = this.setIsFocused.bind(this);
        this.updateInputBlur = this.updateInputBlur.bind(this);
        this.updateInputFocus = this.updateInputFocus.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    async handleFormSubmit(evt) {
        const { formControls } = this.state;
        const values = getValuesFromFormResource(formControls);
        const validationSchema = getValidationSchemaFromFormResource(formControls);

        evt.preventDefault();

        console.log(values);

        // Reset errors
        this.setState({
            formControls: updateFormResourceFromErrors(formControls, {inner:[]})
        });

        await yup.object(validationSchema)
            .validate(
                values,
                { abortEarly: false }
            )
            .then(() => {
                // Validation passed

                // You may want to set a state variable for representing
                // the for msubmitting status in order to show a spinner indicator,
                // disabling the submit button, or somethine else
                // this.setState({
                //     creating_formControls: true
                // });

                // TODO submit the data to a backend/API,
                // in order to send the contact request

                console.log('form submitted!');
            })
            .catch(errors => {
                // If validation does not passes
                // Set errors in the form
                this.setState({
                    formControls: updateFormResourceFromErrors(formControls, errors)
                });
            });
    }

    setIsFocused(name, isFocused) {
        const { formControls } = this.state;

        this.setState({
            formControls: formControls.map((formControl, idx) => {
                if(formControl.name === name) {
                    return {
                        ...formControl,
                        isFocused: isFocused,
                    };
                }

                return formControl;
            }),
        });
    }

    updateInputBlur(evt) {
        this.setIsFocused(evt.target.name, false);
    }

    updateInputFocus(evt) {
        this.setIsFocused(evt.target.name, true);
    }

    updateInputValue(evt) {
        const { formControls } = this.state;

        evt.preventDefault();

        // console.log(evt.target.name, evt.target.value);

        this.setState({
            formControls: formControls.map((formControl, idx) => {
                if(formControl.name === evt.target.name) {
                    return {
                        ...formControl,
                        value: evt.target.value,
                    };
                }

                return formControl;
            }),
        });
    }

    render() {
        const { formControls } = this.state;

        // console.log(formControls);

        return (
            <section id="contact">
                <div className="container">
                    <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <hr className="star-dark mb-5" />
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/*To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                            {/*The form should work on most web servers, but if the form is not working you may need to configure your web server differently.*/}
                            <form
                                name="sentMessage"
                                id="contactForm"
                                noValidate="novalidate"
                                onSubmit={this.handleFormSubmit}
                            >
                                {
                                    formControls.map((formControl, idx) => (
                                        <ContactFormControlGroup
                                            key={`contact_form_control_group_${formControl.name}`}
                                            errors={formControl.errors}
                                            isFocused={formControl.isFocused}
                                            labelText={formControl.labelText}
                                            type={formControl.type}
                                            name={formControl.name}
                                            value={formControl.value}
                                            placeholder={formControl.placeholder}
                                            onInputBlur={this.updateInputBlur}
                                            onInputChange={this.updateInputValue}
                                            onInputFocus={this.updateInputFocus}
                                        />
                                    ))
                                }
                                <br />
                                <div id="success" />
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-xl"
                                        id="sendMessageButton"
                                        onClick={this.handleFormSubmit}
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
