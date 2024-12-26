import { motion } from 'framer-motion';
import { useState } from 'react';
import { programs } from '../data';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', '8-4-4', 'CBC','Computer College','Beauty & Cosmetics','Tailoring & Embroidery','Woodwork and Carpentry','Dairy Production','Extracurricular','Alumni Support & Finacial Aid'];

  const filteredPrograms = selectedCategory === 'all'
    ? programs
    : programs.filter(program => program.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Programs</h1>
      
      <div className="mb-8 flex space-x-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md capitalize ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map(program => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}