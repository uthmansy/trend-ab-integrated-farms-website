import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-24 md:py28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-24">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              Boko Agro Allied
            </h3>
            <p className=" leading-relaxed text-gray-300">
              At Boko Agro Allied, we are committed to revolutionizing
              agriculture through sustainable and innovative farming practices,
              empowering communities, and driving growth in the agro sector.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className=" space-y-8">
              <li>
                <strong className="uppercase tracking-wider">Email:</strong>{" "}
                <a
                  href="mailto:info@bokoagroallied.com"
                  className="hover:underline text-gray-300"
                >
                  info@bokoagroallied.com
                </a>
              </li>
              <li>
                <strong className="uppercase tracking-wider">Office:</strong>{" "}
                <br />
                No. 4 Fez Street, Off Kumasi Crescent, <br />
                Aminu Kano, Wuse 2, Abuja
              </li>
              <li>
                <strong className="uppercase tracking-wider">Factory:</strong>{" "}
                <br />
                No. 61 Ungogo Road, Kano, Kano State
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-8 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className=" space-y-2">
              <li>
                <a href="/" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline text-gray-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className=" text-gray-400">
            &copy; {new Date().getFullYear()} Boko Agro Allied. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v15.35c0 .95-.39 1.88-1.07 2.56-.68.68-1.61 1.07-2.56 1.07h-15.35c-.95 0-1.88-.39-2.56-1.07-.68-.68-1.07-1.61-1.07-2.56v-15.35c0-.95.39-1.88 1.07-2.56.68-.68 1.61-1.07 2.56-1.07h15.35c.95 0 1.88.39 2.56 1.07.68.68 1.07 1.61 1.07 2.56zm-12 10.7v-5.4h-2v-2.2h2v-1.35c0-2.5 1.5-3.9 3.9-3.9 1.1 0 2 .08 2.3.11v2.6h-1.6c-1.3 0-1.5.6-1.5 1.5v1.05h3l-.5 2.2h-2.5v5.4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v15.35c0 .95-.39 1.88-1.07 2.56-.68.68-1.61 1.07-2.56 1.07h-15.35c-.95 0-1.88-.39-2.56-1.07-.68-.68-1.07-1.61-1.07-2.56v-15.35c0-.95.39-1.88 1.07-2.56.68-.68 1.61-1.07 2.56-1.07h15.35c.95 0 1.88.39 2.56 1.07.68.68 1.07 1.61 1.07 2.56zm-12 10.7v-5.4h-2v-2.2h2v-1.35c0-2.5 1.5-3.9 3.9-3.9 1.1 0 2 .08 2.3.11v2.6h-1.6c-1.3 0-1.5.6-1.5 1.5v1.05h3l-.5 2.2h-2.5v5.4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v15.35c0 .95-.39 1.88-1.07 2.56-.68.68-1.61 1.07-2.56 1.07h-15.35c-.95 0-1.88-.39-2.56-1.07-.68-.68-1.07-1.61-1.07-2.56v-15.35c0-.95.39-1.88 1.07-2.56.68-.68 1.61-1.07 2.56-1.07h15.35c.95 0 1.88.39 2.56 1.07.68.68 1.07 1.61 1.07 2.56zm-12 10.7v-5.4h-2v-2.2h2v-1.35c0-2.5 1.5-3.9 3.9-3.9 1.1 0 2 .08 2.3.11v2.6h-1.6c-1.3 0-1.5.6-1.5 1.5v1.05h3l-.5 2.2h-2.5v5.4z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
