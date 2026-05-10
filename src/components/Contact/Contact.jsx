import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { containerVariants, itemVariants } from '../PageTransition/PageTransition';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true);

    const serviceID = 'service_zo7azk3';   // ✅ new SMTP service ID
    const templateToYou = 'template_5a6jbi8';
    const templateToUser = 'template_k4omii6';
    const userID = 'mKkAQbu5ExfW6Qz-S';

    emailjs.sendForm(serviceID, templateToYou, form.current, userID)
      .then(() => emailjs.sendForm(serviceID, templateToUser, form.current, userID))
      .then(() => form.current.reset())
      .catch(console.error)
      .finally(() => setTimeout(() => setSent(false), 4000));
  };

  const contactInfo = [
    {
      icon: '📍',
      label: 'Location',
      value: '226010, Lucknow, India'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 9532038112'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'ayushisnghkasuhik111@gmail.com'
    }
  ];

  return (
    <motion.section
      className="contact-section"
      variants={containerVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="contact-container">
        <motion.h1 className="contact-title gradient-text" variants={itemVariants}>
          Get in Touch
        </motion.h1>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-grid">
            
            {/* Info Card */}
            <motion.div 
              className="contact-info-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="contact-info-header">
                <h2 className="contact-info-title">Let's Connect</h2>
                <p className="contact-info-subtitle">
                  Have a question or want to collaborate? Fill out the form and I'll get back to you asap!
                </p>
              </div>
              
              <div className="contact-info-details">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-info-item"
                    variants={itemVariants}
                  >
                    <span className="contact-info-icon">{info.icon}</span>
                    <div className="contact-info-text">
                      <span className="contact-info-label">{info.label}</span>
                      <span className="contact-info-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form-card"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="form-header">
                <h3 className="form-title">Send Message</h3>
              </div>
              
              <div className="form-fields">
                <div className="form-group">
                  <input
                    name="name"
                    placeholder="Full Name"
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="form-input form-textarea"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={sent}
              >
                {sent ? '✅ Message Sent!' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
