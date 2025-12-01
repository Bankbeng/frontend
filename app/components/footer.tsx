export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-800 to-emerald-900 text-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"> 
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🍊</div>
              <h3 className="text-white text-2xl font-bold">Som 'O'</h3>
            </div>
            <p className="text-green-200 text-sm mb-4">
              Your trusted source for fresh drinks and fruits delivered with care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition transform hover:scale-110">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition transform hover:scale-110">
                <span className="text-xl">🎵</span>
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition transform hover:scale-110">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition transform hover:scale-110">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span>🏢</span> Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span>💡</span> Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span>⚖️</span> Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition hover:pl-2 inline-block duration-300">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-green-300">
              &copy; 2025 Som O. All rights reserved. Made with 💚
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-green-300 hover:text-white transition font-medium">
                Facebook
              </a>
              <a href="#" className="text-green-300 hover:text-white transition font-medium">
                TikTok
              </a>
              <a href="#" className="text-green-300 hover:text-white transition font-medium">
                Instagram
              </a>
              <a href="#" className="text-green-300 hover:text-white transition font-medium">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}