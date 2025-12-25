import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="p-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-purple-700">Welcome to the Quiz App!</h1>
      <p className="mt-4 text-lg">Test your knowledge with fun quizzes.</p>
    </motion.div>
  );
}
