/* ---------- LoadingAnimation.tsx  (keep it in the same file or split out) ---------- */
import { motion } from "framer-motion";

export const LoadingAnimation = () => (
  <motion.div
    /* cover the screen */
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    /* stay fully opaque while mounted … */
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    /* …fade out when React removes it */
    exit={{ opacity: 0 }}
    /* 0 → 0.5 s in timeline */
    transition={{ duration: 0.5 }}
  >
    {/* 0.5 s – “RAFEY”  ---------------------------------------- */}
    <motion.h1
      className="text-6xl md:text-8xl font-bold text-white tracking-widest mb-6"
      initial={{ opacity: 0, y: 50, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      RAFEY
    </motion.h1>

    {/* 1.5 s – underline -------------------------------------- */}
    <motion.div
      className="w-24 h-1 bg-cyan-400 mx-auto mb-6"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.5 }}
    />

    {/* 2.0 s – “PORTFOLIO”  ------------------------------------ */}
    <motion.p
      className="text-cyan-400 text-lg tracking-[0.3em] font-light"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      PORTFOLIO
    </motion.p>

    {/* 2.5 s – pulsing dots ------------------------------------ */}
    <motion.div
      className="flex justify-center gap-2 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 2.5 }}
    >
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  </motion.div>
);


export default LoadingAnimation;