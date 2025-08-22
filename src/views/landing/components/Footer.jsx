import React from "react";
import { Link } from "react-router-dom";

const socialLinksData = [
  { name: 'twitterx', href: 'https://twitter.com/', label: 'Twitter/X' },
  { name: 'telegram', href: 'https://t.me/', label: 'Telegram' },
  { name: 'instagram', href: 'https://instagram.com/', label: 'Instagram' },
  { name: 'tiktok', href: 'https://tiktok.com/', label: 'TikTok' },
  { name: 'linkedin', href: 'https://linkedin.com/', label: 'LinkedIn' },
];

const quickLinksData = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'SRT', path: '/srt' },
  { name: 'Apparel', path: '/apparel' },
  { name: 'How to Buy', path: '/how-to-buy' },
  { name: 'Legal & Compliance', path: '/legal' },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      {/* ✅ Compliance Section */}
      <div className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400">
          <h3 className="text-lg font-semibold mb-4 text-highlightGold">Compliance & Risk Disclosure</h3>
          <p className="mb-2">
            Participation in SRC-related cryptocurrency projects involves risk and may result in loss of capital. Saita Rewards Corporation's tokens are utility-based and not registered as securities. We comply with U.S. laws and strive for transparency.
          </p>
          <p>
            This content is not financial advice. Please conduct your own research and consult a licensed advisor.
            <Link to="/legal" className="text-highlightGold hover:underline ml-1">
              View Full Terms
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* 🚀 Mission / CTA */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold font-orbitron text-highlightGold">
            Empowering the Future of Retirement
          </h3>
          <p className="text-gray-300">
            Discover the flexibility and power of fully digital crypto-based retirement. Join SRC’s journey to revolutionize financial freedom.
          </p>
          <Link
            to="/how-to-buy"
            className="inline-block bg-highlightGold text-black px-6 py-3 rounded-lg font-semibold hover:bg-highlightGold/90 transition-all group relative overflow-hidden"
          >
            <span className="relative z-10">
              Buy Now
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
            <div className="absolute inset-0 bg-highlightGold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>

        {/* ⚡ Quick Links */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-highlightGold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {quickLinksData.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-highlightGold transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-highlightGold transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🏢 Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-highlightGold mb-2">Contact & Address</h4>
          <p className="text-gray-300">382 NE 191st Street, #462212</p>
          <p className="text-gray-300">Miami, Florida 33179</p>
          <p className="text-gray-300 mt-4">
            <strong>Business :</strong> contactus@saitarewardscorporation.com
          </p>
          <p className="text-gray-300">
            <strong> Support:</strong> techsupport@saitarewardscorporation.com
          </p>
        </div>

        {/* 🌍 Social Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-highlightGold mb-2">Follow Us</h4>
          <div className="flex gap-4 flex-wrap">
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111] border border-gray-700 hover:border-highlightGold/50 transition-all group relative"
              >
                <img
                  src={`/footer%20logos/${social.name}.svg`}
                  alt={social.label}
                  className="w-6 h-6 transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-highlightGold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 📄 Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Saita Rewards Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
