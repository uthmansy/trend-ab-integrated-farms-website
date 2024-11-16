import Link from "next/link";

interface Props {
  toggleMenu: () => void;
  isOpen: boolean;
}

function MobileMenu({ toggleMenu, isOpen }: Props) {
  return (
    isOpen && (
      <div className="md:hidden bg-gray-800 bg-opacity-90 border-t border-gray-700 text-white">
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            href="/"
            onClick={toggleMenu}
            className="hover:text-accent-light transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="hover:text-accent-light transition"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="hover:text-accent-light transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="hover:text-accent-light transition"
          >
            Contact
          </Link>
        </nav>
      </div>
    )
  );
}

export default MobileMenu;
