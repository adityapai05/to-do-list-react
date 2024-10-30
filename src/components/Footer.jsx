import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-2 mt-8 fixed bottom-0 left-0 right-0">
      <div className="max-w-2xl mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          Made with ❤️ by <span className="text-white">Aditya Pai</span>
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/adityapai-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:adityapai.main@gmail.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
