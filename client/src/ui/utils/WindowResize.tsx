const windowResize = (setIsMobile: (isMobile: boolean) => void) => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};
export default windowResize;
