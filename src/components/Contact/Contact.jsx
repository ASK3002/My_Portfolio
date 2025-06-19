import React from 'react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info Panel */}
            <div className="p-6 mr-2 bg-yellow-500/50 dark:bg-yellow-600/30 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium text-black dark:text-gray-200 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-black dark:text-gray-200">
                <span className="text-2xl">📍</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  226010, Lucknow, India
                </div>
              </div>

              <div className="flex items-center mt-4 text-black dark:text-gray-200">
                <span className="text-2xl">📞</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 9532038112
                </div>
              </div>

              <div className="flex items-center mt-2 text-black dark:text-gray-200">
                <span className="text-2xl">📧</span>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  ayushisnghkasuhik111@gmail.com
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 flex flex-col justify-center">
              {['Full Name', 'Email', 'Telephone Number'].map((label, i) => {
                const name = label.toLowerCase().replace(/\s/g, '');
                return (
                  <div className={`flex flex-col ${i !== 0 ? 'mt-2' : ''}`} key={name}>
                    <label htmlFor={name} className="hidden">{label}</label>
                    <input
                      type={name === 'email' ? 'email' : name === 'telephonenumber' ? 'tel' : 'text'}
                      name={name}
                      id={name}
                      placeholder={label}
                      className="w-100 mt-2 py-3 px-3 rounded-lg bg-yellow-500/50 dark:bg-yellow-600/30 border border-gray-400 text-black dark:text-white font-semibold focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                );
              })}

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
