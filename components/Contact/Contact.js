import { Component } from 'react';
import ContactFormControlGroup from './ContactFormControlGroup';

const formControls = [
    {
        labelText: 'Name',
        name: 'name',
        placeholder: 'Name',
        type: 'text',
        value: '',
        errors: [],
    },
    {
        labelText: 'Email',
        name: 'email',
        placeholder: 'Email Address',
        type: 'email',
        value: '',
        errors: [],
    },
    {
        labelText: 'Phone Number',
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone Number',
        value: '',
        errors: [],
    },
    {
        labelText: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Message',
        value: '',
        errors: [],
    },
];

class Contact extends Component {
    state = {
        formControls: [...formControls],
    };

    constructor(props) {
        super(props);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    handleFormSubmit(evt) {
        // const { resource } = this.state;
        // const values = getValuesFromFormResource(resource);
        // const validationSchema = getValidationSchemaFromFormResource(resource);
        // const data = { token, ...values };

        evt.preventDefault();

        // Reset errors
        // this.setState({
        //     resource: updateFormResourceFromErrors(resource, {inner:[]})
        // });
        //
        // console.log('form submitted');
        //
        // await yup.object(validationSchema)
        //     .validate(
        //         values,
        //         { abortEarly: false }
        //     )
        //     .then(() => {
        //         // If validation passes
        //         // Create resource
        //
        //         this.setState({
        //             creating_resource: true
        //         });
        //
        //     })
        //     .catch((errors) => {
        //         // If validation does not passes
        //         // Set errors in the form
        //         this.setState({
        //             resource: updateFormResourceFromErrors(resource, errors)
        //         });
        //     });
    }

    updateInputValue(evt) {
        const { formControls } = this.state;

        evt.preventDefault();

        console.log(evt.target.name, evt.target.value);

        this.setState({
            formControls: formControls.map((formControl) => {
                if(formControl.name === evt.target.name) {
                    return {
                        ...formControl,
                        value: evt.target.value
                    };
                }

                return formControl;
            }),
        })
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
                                            labelText={formControl.labelText}
                                            type={formControl.type}
                                            name={formControl.name}
                                            value={formControl.value}
                                            placeholder={formControl.placeholder}
                                            onInputChange={this.updateInputValue}
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
