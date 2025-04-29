import { useState } from "react";

function Navbar({ name, menuItems }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between py-4">
            {/* Logo/Name */}
            <div className="flex items-center">
                <span className="font-bold text-xl">{name}</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                onClick={toggleMenu}
                className="text-gray-200 hover:text-white focus:outline-none"
                >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isMenuOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                    ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    )}
                </svg>
                </button>
            </div>

            {/* Desktop menu items */}
            <div className="hidden md:flex md:items-center">
                <div className="flex flex-row">
                {menuItems.map((item, index) => (
                    <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 hover:bg-gray-700 rounded transition-colors mx-1"
                    >
                    {item}
                    </a>
                ))}
                </div>
            </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
            <div className="md:hidden py-2">
                {menuItems.map((item, index) => (
                <a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-700"
                >
                    {item}
                </a>
                ))}
            </div>
            )}
        </div>
        </nav>
    );
}

export default Navbar;
