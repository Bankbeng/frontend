// Footer Component
// This component appears at the bottom of the page
// It contains: company info, links, and social media

export default function Footer() {
  return (
    // Footer section with dark green background
    // bg-green-700: dark green color
    // text-gray-100: light gray text for readability on dark background
    <footer className="bg-green-700 text-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Grid layout: 1 column on mobile, 4 columns on medium+ screens */}
        {/* gap-8: spacing between columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand Information */}
          <div>
            {/* Company logo and name */}
            <div className="flex items-center gap-2 mb-4 text-white font-bold text-lg">
              <span>🍊</span>
              <span>Som 'O'</span>
            </div>
            {/* Company description */}
            <p className="text-sm mb-4">Your trusted source for fresh drinks and fruits.</p>
            {/* Social media links */}
            <div className="flex gap-2">
              <a href="#" className="hover:text-white transition">📘</a>
              <a href="#" className="hover:text-white transition">🎵</a>
              <a href="#" className="hover:text-white transition">📷</a>
              <a href="#" className="hover:text-white transition">💬</a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
            </ul>
          </div>

          {/* Column 4: Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section: Copyright and social links */}
        {/* border-t: top border to separate sections */}
        <div className="border-t border-green-600 pt-6">
          {/* Flex layout: column on mobile, row on medium+ screens */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright text */}
            <p className="text-sm">&copy; 2025 Som O. All rights reserved.</p>
            {/* Social media links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">TikTok</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}