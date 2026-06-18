import { Zap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-[#2A2250] bg-[#0D0A1F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-lg text-white tracking-tight" style={{ fontFamily: "Nunito, sans-serif", fontWeight: 900 }}>
                Kid<span className="gradient-text">rove</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Kidrove regularly organizes workshops, camps, and courses for children to help them build real-world skills in technology and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#details" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Workshop Details
              </a>
              <a href="#outcomes" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Learning Outcomes
              </a>
              <a href="#faq" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                FAQ
              </a>
              <a href="#register" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Register Now
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@kidrove.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Bengaluru, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2250] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2026 Kidrove. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
              Refund Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;