export const motionTokens = {
  durations: {
    fast: '180ms',
    normal: '280ms',
    slow: '420ms'
  },
  easing: {
    smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    ease: 'cubic-bezier(0.2, 0, 0, 1)'
  }
};

export const motionVariants = {
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  fadeUp: {
    from: { opacity: 0, y: 12 },
    to: { opacity: 1, y: 0 }
  },
  scaleIn: {
    from: { opacity: 0, scale: 0.98 },
    to: { opacity: 1, scale: 1 }
  },
  stagger: {
    delay: 60
  }
};
