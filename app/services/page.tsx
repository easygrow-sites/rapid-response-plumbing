import { Metadata } from 'next';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import { getServiceImage } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Plumbing Services Melbourne - All Services',
  description: 'Comprehensive plumbing services in Melbourne including emergency plumbing, blocked drains, hot water systems, bathroom renovations, and more. Licensed professionals available 24/7.',
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plumbing Services</h1>
          <p className="text-xl max-w-3xl">
            Professional plumbing solutions for every need - residential and commercial
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Plumbing Services Across Melbourne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, our licensed plumbers have the expertise to handle any plumbing challenge. Available 24/7 for emergencies.
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Plumbing Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Expert Plumbers</h3>
              <p className="text-gray-600">
                All our plumbers are fully licensed, insured, and have years of experience handling all types of plumbing work.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Upfront Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. We provide clear, detailed quotes before starting any work.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Simple Service Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Call or fill out our online form to describe your plumbing issue</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Get a Quote</h3>
              <p className="text-gray-600 text-sm">Receive an upfront quote with no hidden fees or surprises</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">We Fix It</h3>
              <p className="text-gray-600 text-sm">Our expert plumber arrives on time and fixes your problem right</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Quality Check</h3>
              <p className="text-gray-600 text-sm">We ensure everything works perfectly before we leave</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Plumbing Service Today?</h2>
          <p className="text-xl mb-8">
            Our team is ready to help with any plumbing service you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300RAPID"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              📞 Call 1300 RAPID
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-500 transition border-2 border-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
