'use client';

import ContactBackground from './ContactBackground';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden text-white">
      {/* 3D animated tech background */}
      <ContactBackground />

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto text-center px-6">
        <h3 className="text-blue-300 font-semibold text-lg mb-2 tracking-wider drop-shadow-md">
          Contact
        </h3>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Get In Touch
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-gray-100 text-lg drop-shadow-lg">
          Have a project in mind or just want to say hi? Send a message below — your mail goes straight to{' '}
          <span className="text-blue-300 font-semibold drop-shadow-md">yudhveerp10@gmail.com</span>.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xgvnlrrn"
          method="POST"
          className="max-w-xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-blue-400/40 space-y-5"
        >
          <div>
            <label className="block text-left text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}












