function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Lumina empowers you with <br /> AI-powered counselling & mentoring across
            all fields.<br /> Get personalized guidance to unlock your potential in
            career, relationships, and personal growth.
          </p>
        </div>
        <div className="">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          
          <ul>
          <div className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
           
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            </div>
          </ul>
        
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex  flex-col gap-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Maharashtra, India</p>
          <p>Mumbai 400101</p>
          <p>Email: info@ai.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 IT. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
