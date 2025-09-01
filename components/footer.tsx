import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, PinIcon, MapIcon } from "lucide-react"
 
export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Immi Insightive</h3>
            <p className="text-gray-400 mb-4">
              Do everything online, from application to approval. Streamlining visa applications worldwide with expert guidance and
              cutting-edge technology. Your trusted partner for seamless immigration services.
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
                <Link href="/services/holiday-visa" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
                  Holiday Visa
                </Link>
              </li>
              <li>
                <Link href="/services/study-abroad" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link href="/services/work-settle" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="/services/work-settle" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
                  Business Visa
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
                  Expert Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/document-verification" className="text-bg-white/80 hover:text-primary-blue-300 transition-colors">
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
                123 Immigration Street <br/> Brisbane CBD, Queensland <br/> Australia, 4000
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
