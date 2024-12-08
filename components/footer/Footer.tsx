import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold mb-4">Aufit</h3>
              <p className="text-sm">
                Creating amazing experiences since 2024.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Aufit Home
                  </Link>
                </li>
                <li>
                  <Link href="https://www.auxcool.com/" className="hover:text-white transition-colors" target="_blank">
                    Aux Group
                  </Link>
                </li>
                <li>
                  <Link href="https://www.dx.com.bd/" className="hover:text-white transition-colors" target="_blank">
                    DX Group
                  </Link>
                </li>
                <li>
                  <Link href="https://godxg.com/" className="hover:text-white transition-colors" target="_blank">
                    DXG
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: info@aufit.com.bd</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: H# 7, R# 54/A, Gulshan 2</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Aufit. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;