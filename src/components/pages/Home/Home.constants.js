export const handImgVariants = {
  start: () => ({
    rotate: [0, 80, 0],
    x: [0, 10, 0],
    y: [0, -5, 0],
    transition: {
      delay: 0.6,
      repeat: 1,
      repeatType: "loop",
      duration: 0.6,
      ease: "linear",
    },
  }),
  reset: {
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const hiTitleVariant = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const titleVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.8,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
