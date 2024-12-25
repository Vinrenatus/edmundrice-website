import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <MapPin className="text-primary-600" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Eagle Africa Centre, Longonot Road, Upperhill
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-primary-600" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+254 XX XXX XXX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-primary-600" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">info@ercec.sc.ke</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-100 dark:bg-green-800 p-6 rounded-lg"
            >
              <h3 className="text-green-800 dark:text-green-100 font-semibold mb-2">
                Thank you for your message!
              </h3>
              <p className="text-green-700 dark:text-green-200">
                We'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}