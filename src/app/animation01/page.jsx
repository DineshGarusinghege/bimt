// components/AnimatedSection.js
'use client';

import { motion } from 'framer-motion';

const AnimatedSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }} // Animates only once when scrolled into view
            className="my-section"
        >
            <h2>Scroll Animation Section</h2>
            <p>This section animates as you scroll down!</p>
        </motion.div>
    );
};

export default AnimatedSection;
