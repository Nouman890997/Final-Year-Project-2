import React, { useState } from "react";
import "./Contact.css";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+92",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required.";
      else if (value.length < 3) error = "Name must be at least 3 characters.";
      else if (!/^[A-Za-z\s]*$/.test(value)) error = "Only letters allowed.";
    } else if (name === "email") {
      if (!value.trim()) error = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format.";
    } else if (name === "phone") {
      if (!value.trim()) error = "Phone is required.";
      else if (!/^\+92\d{10}$/.test(value)) error = "Use +92XXXXXXXXXX format.";
    } else if (name === "message") {
      if (!value.trim()) error = "Message is required.";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\+92\d{0,10}$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const isFormValid = () =>
    Object.values(formData).every((v) => v.trim() !== "") &&
    Object.values(errors).every((e) => !e);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validate(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      handleSendEmail();
    }
  };

  const handleSendEmail = () => {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_hevmi1c",  // Replace with your EmailJS Service ID
        "template_9wnavkp",  // Replace with your EmailJS Template ID
        templateParams,
        "Dl_O-dceuUedbOBQa"      // Replace with your EmailJS User ID
      )
      .then(() => {
        resetForm();
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "+92", message: "" });
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="top-section">
        <div className="contact-image">
          <img
            src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
            alt="Support"
          />
        </div>

        <div className="contact-form">
          <h2>Quick Contact</h2>
          {isSubmitted && (
            <div className="success-message">
              <p>Thank you! We'll get back to you soon.</p>
            </div>
          )}
          <form onSubmit={handleSubmit} noValidate>
            {errors.name && <div className="error-text">{errors.name}</div>}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`${errors.name ? "invalid" : formData.name ? "valid" : ""}`}
            />

            {errors.email && <div className="error-text">{errors.email}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`${errors.email ? "invalid" : formData.email ? "valid" : ""}`}
            />

            {errors.phone && <div className="error-text">{errors.phone}</div>}
            <input
              type="tel"
              name="phone"
              placeholder="+92XXXXXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className={`${errors.phone ? "invalid" : formData.phone.length > 3 ? "valid" : ""}`}
            />

            {errors.message && <div className="error-text">{errors.message}</div>}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`${errors.message ? "invalid" : formData.message ? "valid" : ""}`}
            />

            <button type="submit" disabled={!isFormValid()}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="contact-info">
        <a href="tel:+923001234567" className="info-block" title="Call Now">
          <div className="info-icon-container">
            <MdPhone className="info-icon" />
          </div>
          <div>
            <h3>Phone</h3>
            <p>+92 300 1234567</p>
          </div>
        </a>

        <a href="mailto:support@petorius.com" className="info-block" title="Email Now">
          <div className="info-icon-container">
            <MdEmail className="info-icon" />
          </div>
          <div>
            <h3>Email</h3>
            <p>support@petorius.com</p>
          </div>
        </a>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="info-block"
          title="WhatsApp Now"
        >
          <div className="info-icon-container">
            <FaWhatsapp className="info-icon" />
          </div>
          <div>
            <h3>WhatsApp</h3>
            <p>+92 300 1234567</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;






