import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsGrid } from '../components/home/ProgramsGrid';
import { NewsSection } from '../components/home/NewsSection';
import { programs, news } from '../data';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ProgramsGrid programs={programs} />
      <NewsSection news={news} />
    </motion.div>
  );
}