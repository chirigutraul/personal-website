const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-8 text-center text-white bg-black position-absolute">
      <p>© {currentYear} Chirigut Raul. All rights reserved.</p>
    </div>
  );
};

export default Footer;
