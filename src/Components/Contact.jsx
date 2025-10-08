import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus({ message: "Sending...", type: "info" });

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(
    () => {
      setStatus({ message: "✅ Message sent successfully!", type: "success" });
      form.current.reset();
    },
    (error) => {
      console.error("EmailJS error:", error);
      setStatus({ message: "❌ Failed to send message. Please try again.", type: "error" });
    }
  );

};


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-4 py-20">
      <motion.div
        className="w-full max-w-lg bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          📬 Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          I’d love to hear from you! Fill out the form below, and I’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="from_name"
              placeholder="Your good name"
              required
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="from_email"
              placeholder="youremail@gmail.com"
              required
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 dark:text-gray-200 text-sm font-semibold mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          {/* Status Message */}
          {status.message && (
            <p
              className={`text-center text-sm font-medium ${
                status.type === "success"
                  ? "text-green-600 dark:text-green-400"
                  : status.type === "error"
                  ? "text-red-600 dark:text-red-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {status.message}
            </p>
          )}

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 transition"
            >
              Send Message ✉️
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
