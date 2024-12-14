// Scroll to the latest
export const scrollToBottom = (elementRef) => {
  elementRef.current?.scrollIntoView({ behavior: "smooth" });
};
// scroll to the top
export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
