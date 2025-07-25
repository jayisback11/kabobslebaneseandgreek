import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import data from "../../data.json";

function Contact() {
  return (
    <div className="contact-page" id="contact-page">
      <header
        className="height-50 mt-5"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.contact.backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="container h-100 d-flex align-items-center justify-content-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-light">Contact</h1>
        </motion.div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.865771319717!2d-91.04826!3d30.411550000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626bb4632dca2e1%3A0xf4b1682e0067214a!2sBistro%20Italia!5e0!3m2!1sen!2sus!4v1753481271851!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
