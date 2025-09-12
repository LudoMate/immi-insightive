import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapIcon } from "lucide-react"

const ImmiInsightiveLogo = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Globe */}
    <circle cx="20" cy="20" r="12" fill="#0066FF" fillOpacity="0.2" stroke="#0066FF" strokeWidth="2" />

    {/* Globe grid lines */}
    <path d="M8 20 C8 20, 14 12, 20 20 C26 28, 32 20, 32 20" stroke="#0066FF" strokeWidth="1.5" fill="none" />
    <path d="M8 20 C8 20, 14 28, 20 20 C26 12, 32 20, 32 20" stroke="#0066FF" strokeWidth="1.5" fill="none" />
    <line x1="8" y1="20" x2="32" y2="20" stroke="#0066FF" strokeWidth="1.5" />
    <line x1="20" y1="8" x2="20" y2="32" stroke="#0066FF" strokeWidth="1.5" />

    {/* Connection nodes */}
    <circle cx="6" cy="12" r="2" fill="#0066FF" />
    <circle cx="34" cy="28" r="2" fill="#0066FF" />
    <circle cx="12" cy="6" r="2" fill="#0066FF" />
    <circle cx="28" cy="34" r="2" fill="#0066FF" />

    {/* Connection lines */}
    <line x1="8" y1="14" x2="14" y2="16" stroke="#0066FF" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="32" y1="26" x2="26" y2="24" stroke="#0066FF" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="14" y1="8" x2="18" y2="12" stroke="#0066FF" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="26" y1="32" x2="22" y2="28" stroke="#0066FF" strokeWidth="1" strokeDasharray="2,2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            // Added SVG logo with company name
            <div className="flex items-center gap-3 mb-4">
              <ImmiInsightiveLogo />
              <h3 className="text-xl font-bold text-white">Immi Insightive</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Do everything online, from application to approval. Streamlining visa applications worldwide with expert
              guidance and cutting-edge technology. Your trusted partner for seamless immigration services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/holiday-visa"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Holiday Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/study-abroad"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Study Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/work-settle"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Work Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/work-settle"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Business Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultation"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Expert Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/document-verification"
                  className="text-bg-white/80 hover:text-primary-blue-300 transition-colors"
                >
                  Document Verification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-200 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-blue-600">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-blue-600">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-200 hover:text-blue-600">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-200 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <a href="mailto:info@insightive.site" className="text-gray-400 hover:text-blue-600 transition-colors">
                  info@insightive.site
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <a href="tel:+61234567890" className="text-gray-400 hover:text-blue-600 transition-colors">
                  +61 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapIcon size={16} className="text-blue-600" />
                123 Immigration Street <br /> Brisbane CBD, Queensland <br /> Australia, 4000
              </li>
              <li className="flex items-center gap-2">
                <button className="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-700 transition-colors">
                  <Link href="/help">Get in Touch</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Immi Insightive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
