"use client";

import { motion } from "framer-motion";
import { procedureSteps } from "@/constants/index";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function ProcedureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [highlightRef, highlightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="procedura" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12">PROCEDURA PREUZIMANJA</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              {procedureSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-primary mb-2 text-left">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-left">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={highlightRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={highlightInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-8 rounded-xl shadow-2xl h-full flex flex-col justify-center items-center text-center sticky top-24">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 leading-snug">
                Ceo proces je zaokružen za samo 3-4 radna dana!
              </h3>
              <p className="text-xl text-blue-50">
                Brzo, efikasno i u skladu sa zakonom
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
