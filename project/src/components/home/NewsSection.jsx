import { motion } from 'framer-motion';

export function NewsSection({ news }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Latest News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(item.date)}
                </time>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}