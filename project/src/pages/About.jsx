import { motion } from 'framer-motion';

export default function About() {
  const milestones = [
    { year: 2020, title: "Foundation Established" },
    { year: 2021, title: "First Major Policy Implementation" },
    { year: 2022, title: "Regional Expansion" },
    { year: 2023, title: "Digital Transformation" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About ERC-EC</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          The Energy and Petroleum Regulatory Authority is committed to ensuring sustainable and efficient energy practices across Kenya.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Journey</h2>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-24 text-2xl font-bold text-primary-600">
                {milestone.year}
              </div>
              <div className="flex-grow border-t-2 border-primary-200"></div>
              <div className="flex-shrink-0 w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {milestone.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}