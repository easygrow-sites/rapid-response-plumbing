import { Metadata } from 'next';
import Link from 'next/link';
import { getAllLocations } from '@/lib/locations';
import LocationCard from '@/components/LocationCard';

export const metadata: Metadata = {
  title: 'Service Areas - Plumbers Across Melbourne',
  description: 'Rapid Response Plumbing services all Melbourne suburbs. Find your local area for fast, professional plumbing services. Available 24/7 for emergencies.',
};

export default function LocationsPage() {
  const locations = getAllLocations();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-xl max-w-3xl">
            Professional plumbing services across all Melbourne suburbs
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving All of Melbourne
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              With over 25 years of experience, Rapid Response Plumbing proudly serves homes and businesses throughout Melbourne and surrounding suburbs. No matter where you are, we're just a phone call away.
            </p>
            <a
              href="tel:1300RAPID"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition"
            >
              📞 Call 1300 RAPID
            </a>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Click Your Suburb for Local Plumbing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map(location => (
              <LocationCard
                key={location.slug}
                name={location.name}
                slug={location.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fast Response Times Across Melbourne
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We understand that when you need a plumber, you need them fast. That's why we strategically position our team across Melbourne to ensure rapid response times no matter where you are.
                </p>
                <p>
                  Our fleet of fully-equipped service vehicles means our plumbers arrive with everything needed to complete most jobs on the first visit, saving you time and hassle.
                </p>
                <p>
                  Whether you're in the CBD, beachside suburbs, or outer Melbourne areas, we guarantee professional service with the same level of quality and care.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Local Plumbing Experts?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-gray-600">Faster response times to your area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-gray-600">Knowledge of local plumbing systems and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-gray-600">Trusted reputation in your community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-gray-600">Supporting local businesses and economy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">✓</span>
                  <span className="text-gray-600">24/7 emergency service availability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map Alternative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Service Coverage by Region
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary-600">Inner Melbourne</h3>
              <p className="text-sm text-gray-600">CBD, Carlton, Fitzroy, Collingwood, Richmond, South Yarra</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary-600">Eastern Suburbs</h3>
              <p className="text-sm text-gray-600">Hawthorn, Kew, Camberwell, Box Hill, Doncaster, Balwyn</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary-600">Western Suburbs</h3>
              <p className="text-sm text-gray-600">Footscray, Yarraville, Williamstown, Maribyrnong, Sunshine</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-3 text-primary-600">Bayside</h3>
              <p className="text-sm text-gray-600">Brighton, St Kilda, Elwood, Port Melbourne, Hampton</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See Your Suburb Listed?</h2>
          <p className="text-xl mb-8">
            We service many more areas across Melbourne. Give us a call to confirm coverage in your area.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
