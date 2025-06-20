import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setSent(true); // show message instantly

  const serviceID = 'service_y24zs86';
  const templateToYou = 'template_5a6jbi8';
  const templateToUser = 'template_k4omii6';
  const userID = 'mKkAQbu5ExfW6Qz-S';

  // Send to you
  emailjs.sendForm(serviceID, templateToYou, form.current, userID)
    .then(() => {
      // Send auto-reply
      return emailjs.sendForm(serviceID, templateToUser, form.current, userID);
    })
    .then(() => {
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email error:', error);
    })
    .finally(() => {
      // Hide "Message Sent" after 4s no matter what
      setTimeout(() => setSent(false), 4000);
    });
};


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Info Panel */}
            <div className="p-6 mr-2 ml-4 bg-yellow-500/50 dark:bg-yellow-600/30 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">Get in touch:</h1>
              <p className="text-lg sm:text-xl font-medium text-black dark:text-gray-200 mt-2">Fill in the form to start a conversation</p>
              <div className="flex items-center mt-8 text-black dark:text-gray-200">
                <span className="text-2xl">📍</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">226010, Lucknow, India</div>
              </div>
              <div className="flex items-center mt-4 text-black dark:text-gray-200">
                <span className="text-2xl">📞</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">+91 9532038112</div>
              </div>
              <div className="flex items-center mt-2 text-black dark:text-gray-200">
                <span className="text-2xl">📧</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">ayushisnghkasuhik111@gmail.com</div>
              </div>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
              <input name="name" placeholder="Full Name" required
                className="w-full mt-2 py-3 px-3 rounded-lg bg-yellow-500/50 dark:bg-yellow-600/30 border border-gray-400 text-black dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
              <input name="email" type="email" placeholder="Email" required
                className="w-full mt-2 py-3 px-3 rounded-lg bg-yellow-500/50 dark:bg-yellow-600/30 border border-gray-400 text-black dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
              <input name="phone" placeholder="Telephone Number"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-yellow-500/50 dark:bg-yellow-600/30 border border-gray-400 text-black dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
              />
              <textarea name="message" rows="4" placeholder="Your Message"
                className="w-full mt-2 py-3 px-3 rounded-lg bg-yellow-500/50 dark:bg-yellow-600/30 border border-gray-400 text-black dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition"
              >
                Submit
              </button>

              {sent && (
                <h1 className="text-center text-green-700 font-semibold mt-4 text-xl">
                  ✅ Message Sent!
                </h1>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
