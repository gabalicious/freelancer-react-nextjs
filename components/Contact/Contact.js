import ContactFormControlGroup from './ContactFormControlGroup';

const formControlGroups = [
    {
        labelText: 'Name',
        name: 'name',
        placeholder: 'Name',
        type: 'text',
    },
    {
        labelText: 'Email',
        name: 'email',
        placeholder: 'Email Address',
        type: 'email',
    },
    {
        labelText: 'Phone Number',
        name: 'phone',
        type: 'tel',
        placeholder: 'Phone Number',
    },
    {
        labelText: 'Message',
        type: 'textarea',
        name: 'message',
        placeholder: 'Message',
    },
];

const Contact = () => (
    <section id="contact">
        <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <hr className="star-dark mb-5" />
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {/*To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                    {/*The form should work on most web servers, but if the form is not working you may need to configure your web server differently.*/}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        {
                            formControlGroups.map((formControlGroup, idx) => (
                                <ContactFormControlGroup
                                    key={`contact_form_control_group_${formControlGroup.name}`}
                                    labelText={formControlGroup.labelText}
                                    type={formControlGroup.type}
                                    name={formControlGroup.name}
                                    placeholder={formControlGroup.placeholder}
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

export default Contact;
