import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const cryptoDropdown = [ 
  {
    name: "Our Services",
    subItems: [
      { name: "Services", path: "/services" },
    ],
  },
{
  name: "Our Products",
  subItems: [
    { 
      name: "SRT", 
      external: true, 
      path: "https://saitarewards.com/"  // 👈 external site
    },
    { name: "RevUP", path: "/revup" },
  ],
},

];

const accountDropdown = [
  { name: "Create Account", path: "/create-account" },
  { name: "Account Login", path: "/account" },
];

const topNav = [
  { name: "Home", path: "/" },
  { name: "Crypto Products & Services", isDropdown: true, dropdown: cryptoDropdown },
  { name: "Urban Halo Store", path: "/marketplace" }, // direct link to main Marketplace
  { name: "Digital Academy", path: "/content" }, // new top-level
  { name: "Technology", path: "/technology" },   // new top-level
  { name: "News & Updates", path: "/newsletter" },
  { name: "Legal & Compliance", path: "/legal" },
  { name: "Contact Us", path: "/contact" },
  { name: "How to Buy", path: "/how-to-buy" },
  { name: "Wallet Connect", path: "/wallet" },
  { name: "Account", isDropdown: true, dropdown: accountDropdown },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800 py-3 px-4 md:px-8 lg:px-12 flex justify-between items-center shadow-lg shadow-highlightGold/5">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-highlightGold/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[10px] -z-10" />
          <div className="absolute inset-0 border-2 border-highlightGold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src="/new logo.png" 
            alt="Saita Rewards Corporation" 
            className="h-29px w-12 object-cover object-transition-[filter] duration-300 hover:drop-shadow-[0_0_12px_rgba(255,200,0,0.3)]" 
            loading="eager" 
          />
        </div>
        <span className="sr-only">Saita Rewards Corporation - Home</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 flex-1 max-w-7xl mx-auto justify-between">
        <ul className="flex gap-4 lg:gap-6 font-medium text-sm">
          {topNav.slice(0, 4).map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
        
        <ul className="flex gap-4 lg:gap-6 font-medium text-sm">
          {topNav.slice(4).map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
      </div>

      {/* Buy Now Button */}
      <div className="hidden md:flex items-center gap-4">
        <Link 
          to="/how-to-buy" 
          className="relative bg-highlightGold text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-highlightGold/90 transition-all duration-300 flex items-center gap-2 group overflow-hidden"
        >
          <span className="relative z-10">Buy Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 -translate-x-16 group-hover:translate-x-16 w-32" />
          <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-gray-300 hover:text-highlightGold transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/95 backdrop-blur-xl overflow-y-auto pb-8 border-t border-gray-800">
          <div className="container mx-auto px-4">
            {topNav.map((item) => (
              <MobileNavItem key={item.name} item={item} setIsMenuOpen={setIsMenuOpen} />
            ))}
            <Link 
              to="/how-to-buy" 
              className="mt-4 inline-block bg-highlightGold text-black px-6 py-2 rounded-full font-semibold hover:bg-highlightGold/90 hover:text-black transition-colors"
            >
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable Desktop Nav Item Component
const NavItem = ({ item }) => (
  <li className="relative group">
    {item.isDropdown ? (
      <>
        <button className="text-gray-300 hover:text-highlightGold flex items-center gap-1 transition-colors py-2">
          {item.name}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute left-0 mt-1 min-w-48 bg-black/95 backdrop-blur-lg rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-700 z-50">
          {item.dropdown.map((sub) => (
            sub.subItems ? (
              <div key={sub.name} className="px-4 py-2 space-y-2">
                <p className="text-xs font-semibold text-highlightGold mb-1">{sub.name}</p>
                {sub.subItems.map((child) => (
                  <Link 
                    key={child.name} 
                    to={child.path} 
                    className="block px-3 py-1.5 text-sm text-gray-300 hover:text-highlightGold hover:bg-gray-800/50 rounded-lg transition-colors"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link 
                key={sub.name} 
                to={sub.path} 
                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-highlightGold hover:bg-gray-800/50 transition-colors"
              >
                {sub.name}
              </Link>
            )
          ))}
        </div>
      </>
    ) : (
      <Link 
        to={item.path} 
        className="text-gray-300 hover:text-highlightGold relative group transition-colors duration-300 py-2"
      >
        {item.name}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-highlightGold transition-all duration-300 group-hover:w-full" />
      </Link>
    )}
  </li>
);

// Mobile Nav Item Component
const MobileNavItem = ({ item, setIsMenuOpen }) => (
  <div className="space-y-2 border-b border-gray-800 last:border-0">
    {item.isDropdown ? (
      <details className="group">
        <summary className="flex items-center justify-between text-gray-300 hover:text-highlightGold cursor-pointer py-4">
          {item.name}
          <svg className="w-4 h-4 transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="ml-4 mb-4 space-y-2">
          {item.dropdown.map((sub) => (
            sub.subItems ? (
              <div key={sub.name} className="space-y-2">
                <p className="text-sm font-semibold text-highlightGold mt-2">{sub.name}</p>
                {sub.subItems.map((child) => (
                  <Link 
                    key={child.name} 
                    to={child.path} 
                    className="block py-2 pl-4 text-sm text-gray-300 hover:text-highlightGold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link 
                key={sub.name} 
                to={sub.path} 
                className="block py-2 pl-4 text-sm text-gray-300 hover:text-highlightGold"
                onClick={() => setIsMenuOpen(false)}
              >
                {sub.name}
              </Link>
            )
          ))}
        </div>
      </details>
    ) : (
      <Link 
        to={item.path} 
        className="block py-4 text-gray-300 hover:text-highlightGold transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    )}
  </div>
);

export default Navbar;