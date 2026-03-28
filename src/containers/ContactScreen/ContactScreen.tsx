import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./ContactScreen.css";

// Initialize EmailJS with your public key
emailjs.init("user_do8WMjoHPIeyfsvaMhrIf");

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const sendFeedback = (templateId: string, variables: any) => {
    emailjs.send("gmail", templateId, variables).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      },
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const templateId = "sequoia_contact_template";
    const to_name = "Heidi Agostini";

    console.log("submitting");
    sendFeedback(templateId, {
      from_name: name,
      reply_to: email,
      message_html: message,
      to_name,
    });
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(true);
  };

  return (
    <div id="click-container" className="contact-screen">
      <div>
        <h2 className="contact-intro">Contact Us</h2>
        <p className="contact-description">
          Please send us an email and we will respond to your message as soon as
          available
        </p>
      </div>
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">
              <div className="label-content">Name:</div>
              <input
                className="input-field name-field"
                type="text"
                onChange={handleNameChange}
                placeholder="Full Name"
                value={name}
                required
              />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="email">
              <div className="label-content">Email:</div>
              <input
                className="input-field email-field"
                type="email"
                onChange={handleEmailChange}
                placeholder="email@example.com"
                value={email}
                required
              />
            </label>
          </div>

          <div className="form-field">
            <label htmlFor="message">
              <div className="label-content">Message:</div>
              <textarea
                className="stretch text-area"
                onChange={handleMessageChange}
                placeholder="Please enter your message here..."
                rows={10}
                value={message}
                required
              />
            </label>
          </div>

          <button className="submit-button" type="submit">
            Send
          </button>
        </form>
      </div>
      <p className="message-sent" style={isSent ? {} : { display: "none" }}>
        Your message has been sent!
      </p>
    </div>
  );
};

export default ContactScreen;
