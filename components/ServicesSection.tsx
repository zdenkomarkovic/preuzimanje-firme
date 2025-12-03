"use client";

import { motion } from "framer-motion";
import { services } from "@/constants/index";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="usluge" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4">POSLOVNI KONSALTING</h2>
          <p className="text-center max-w-4xl mx-auto mb-12 text-muted-foreground">
            Rešite Vaš problem sa firmom u skladu sa novim zakonskim propisima
            (shodno izmenama zakona o privrednim društvima iz 2021. godine -
            službeni glasnik RS, broj 109/2021)
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card p-8 rounded-xl shadow-xl border-l-4 border-primary"
        >
          <h3 className="mb-4">Mi smo tu da Vam pomognemo</h3>
          <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Ukoliko je Vaša firma u blokadi, u procesu likvidacije, ako imate
            zaduženja prema bankama (kredit), dobavljačima (isplata ili
            refinansiranje duga) ili jednostavno želite da se rešite svoje firme
            u skladu sa svim zakonima i propisima, mi smo tu da Vam ponudimo
            najbolje rešenje u skladu sa{" "}
            <strong className="text-primary">ZAKONOM O PRIVREDNIM DRUŠTVIMA</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
