import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contactSection">
      <div className="wrapper">
        <div className="contactContent">
          <div className="contactHeader">
            <h2>Contact Us</h2>
            <p>
              Have a question? Need assistance? Contact us and we'll get back to
              you
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
