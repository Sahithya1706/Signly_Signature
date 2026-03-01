const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Signly
          </h3>
          <p className="text-sm leading-relaxed">
            Secure digital signatures for modern businesses. 
            Fast, reliable, and legally compliant e-signature solutions.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Features</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay Connected
          </h4>
          <div className="flex space-x-4">

            {/* Twitter */}
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 5.8c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2 8 8 0 01-2.5 1 4 4 0 00-6.9 3.6A11.3 11.3 0 013 4.8a4 4 0 001.2 5.3 4 4 0 01-1.8-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 19.5a11.3 11.3 0 006 1.8c7.2 0 11.2-6 11.2-11.2v-.5A8 8 0 0022 5.8z" />
              </svg>
            </div>

            {/* LinkedIn */}
            <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition cursor-pointer">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z" />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* Bottom Section */}
<div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
  © 2026 Signly. All rights reserved. | Developed by{" "}
  <span className="text-white font-medium">
    Sahithya Hegde
  </span>
</div>
    </footer>
  );
};

export default Footer;