import Link from 'next/link';
import { getAllServices } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';

export default function Footer() {
  const services = getAllServices().slice(0, 6);
  const locations = getAllLocations().slice(0, 8);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Rapid Response Plumbing</h3>
            <p className="text-gray-400 mb-4">
              Melbourne's trusted plumbing experts. Available 24/7 for all your plumbing needs.
            </p>
            <div className="space-y-2">
              <a href="tel:1300RAPID" className="block hover:text-white">
                📞 1300 RAPID
              </a>
              <a href="mailto:info@rapidresponseplumbing.com.au" className="block hover:text-white">
                ✉️ info@rapidresponseplumbing.com.au
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary-400 hover:text-primary-300 font-semibold">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map(location => (
                <li key={location.slug}>
                  <Link href={`/locations/${location.slug}`} className="hover:text-white">
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-primary-400 hover:text-primary-300 font-semibold">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/services" className="hover:text-white">All Services</Link></li>
              <li><Link href="/locations" className="hover:text-white">All Locations</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Rapid Response Plumbing. All rights reserved.</p>
          <p className="mt-2">Licensed Plumber | Fully Insured | 24/7 Emergency Service</p>
        </div>
      </div>
    </footer>
  );
}
