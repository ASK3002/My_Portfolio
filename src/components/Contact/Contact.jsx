import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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

  return (
    <>
      {/* Load Google Fonts Montserrat + Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-gray-900 dark:to-gray-800 py-16 px-6"
        style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info Panel */}
          <div className="bg-gradient-to-tr from-orange-400 to-yellow-300 dark:from-orange-700 dark:to-yellow-600 p-10 rounded-3xl shadow-xl text-white flex flex-col justify-center space-y-8">
            <h1
              className="text-4xl font-bold tracking-tight leading-tight drop-shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '-0.03em' }}
            >
              Get in Touch
            </h1>
            <p className="text-lg font-light tracking-wide drop-shadow-md leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Have a question or want to collaborate? Fill out the form and I'll get back to you asap!
            </p>
            <div className="space-y-6 text-xl font-semibold tracking-wide">
              <div className="flex items-center gap-4">
                <span className="text-xl">📍</span>
                <span>226010, Lucknow, India</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">📞</span>
                <span>+91 9532038112</span>
              </div>
              <div className="flex items-start gap-4 break-words flex-wrap">
  <span className="text-xl mt-[2px]">📧</span>
  <span className="break-all">ayushisnghkasuhik111@gmail.com</span>
</div>

            </div>
          </div>

          {/* Form Panel */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 flex flex-col space-y-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <input
              name="name"
              placeholder="Full Name"
              required
              className="input-field"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input-field"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            />
            <input
              name="phone"
              placeholder="Telephone Number"
              className="input-field"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="input-field resize-none"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-white font-semibold py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 tracking-wide"
            >
              Send Message
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-green-600 font-semibold mt-4 select-none tracking-wide"
              >
                ✅ Message Sent!
              </motion.p>
            )}
          </motion.form>
        </div>

        <style>{`
          .input-field {
            background-color: #FEF3C7; /* yellow-200 */
            border: 2px solid transparent;
            padding: 14px 16px;
            border-radius: 16px;
            color: #1F2937; /* gray-800 */
            transition: border-color 0.3s ease, background-color 0.3s ease;
            outline-offset: 2px;
            font-size: 1rem;
          }
          .input-field:focus {
            border-color: #F97316; /* orange-500 */
            background-color: #FFFBEB; /* yellow-50 */
            outline: none;
          }
          @media (prefers-color-scheme: dark) {
            .input-field {
              background-color: #1E293B; /* gray-800 */
              color: #F3F4F6; /* gray-100 */
            }
            .input-field:focus {
              background-color: #334155; /* gray-700 */
            }
          }
        `}</style>
      </motion.div>
    </>
  );
}
