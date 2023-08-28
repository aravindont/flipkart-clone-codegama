import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 fixed-bottom">
      <div className="container">
        <p className="mb-0">
          Made with ❤️ in India | Contact us: LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aravind-ontagodi/"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aravind Ontagodi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
