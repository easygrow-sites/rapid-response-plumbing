import Link from 'next/link';
import Image from 'next/image';
import { getAllServices } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import ServiceCard from '@/components/ServiceCard';
import LocationCard from '@/components/LocationCard';
import { getServiceImage, heroImages } from '@/lib/images';

export default function HomePage() {
  const services = getAllServices();
  const locations = getAllLocations().slice(0, 12);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={heroImages[0]}
            alt="Professional plumber at work"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Melbourne's Trusted Plumbing Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              24/7 Emergency Service | Fast Response | Licensed & Insured
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300RAPID"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition inline-block"
              >
                📞 Call Now: 1300 RAPID
              </a>
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-primary-500 transition inline-block"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing solutions for residential and commercial properties across Melbourne
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                description={service.description}
                image={getServiceImage(service.slug, index)}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas Across Melbourne
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proudly serving homes and businesses throughout Melbourne and surrounding suburbs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map(location => (
              <LocationCard
                key={location.slug}
                name={location.name}
                slug={location.slug}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Rapid Response Plumbing?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast Response Time</h3>
              <p className="text-gray-600">
                We understand plumbing emergencies can't wait. Our team arrives quickly and ready to solve your problem.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                All our plumbers are fully licensed, insured, and experienced professionals you can trust.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee on all plumbing services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Plumber Right Now?
          </h2>
          <p className="text-xl mb-8">
            Our emergency plumbers are available 24/7 to help you with any plumbing issue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300RAPID"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition inline-block"
            >
              📞 Call 1300 RAPID
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-primary-500 transition inline-block border-2 border-white"
            >
              Request Callback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
