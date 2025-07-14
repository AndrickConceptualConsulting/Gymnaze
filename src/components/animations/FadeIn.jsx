import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8,
  once = true,
  scale = false,
  blur = false,
  className = '',
  ...props 
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      ...(scale && { scale: 0.95 }),
      ...(blur && { filter: 'blur(4px)' }),
    },
    visible: {
      opacity: 1,
      ...(scale && { scale: 1 }),
      ...(blur && { filter: 'blur(0px)' }),
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;