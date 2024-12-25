import { motion } from 'framer-motion';
import { useState } from 'react';
import { gallery } from '../data';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ×
            </button>
            <img
              src={selectedItem.url}
              alt={selectedItem.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
              <p className="mt-2">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}