import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs } from '@/lib/locations';
import { getAllServices } from '@/lib/services';
import ServiceCard from '@/components/ServiceCard';
import { getServiceImage } from '@/lib/images';

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map(slug => ({ location: slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `Plumber ${location.name} | 24/7 Emergency Plumbing Services`,
    description: `Professional plumbing services in ${location.name}. Emergency plumber available 24/7. Blocked drains, hot water, leaks, and all plumbing needs. Call 1300 RAPID.`,
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.location);

  if (!location) {
    notFound();
  }

  const services = getAllServices();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Plumber {location.name}
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            Your trusted local plumbing experts in {location.name}. Fast, reliable, professional service available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:1300RAPID"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-center"
            >
              📞 Call 1300 RAPID
            </a>
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-500 transition text-center border-2 border-white"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Plumbing Services in {location.name}
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                When you need a reliable plumber in {location.name}, Rapid Response Plumbing is your trusted local choice. We've been serving the {location.name} community for over 25 years, building a reputation for quality workmanship, honest pricing, and exceptional customer service.
              </p>
              <p>
                Our team of licensed and insured plumbers knows the {location.name} area inside and out. We understand the unique plumbing challenges that homes and businesses in {location.name} can face, from older plumbing systems to modern installations. Whatever your plumbing needs, we have the expertise to get the job done right.
              </p>
              <p>
                We're proud to be {location.name}'s go-to emergency plumber, available 24 hours a day, 7 days a week. Whether it's a burst pipe in the middle of the night or a blocked drain on the weekend, we'll be there fast to minimize damage and restore your plumbing to perfect working order.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why {location.name} Residents Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Fast Local Response</h3>
                <p className="text-gray-600">
                  As local {location.name} plumbers, we provide rapid response times. Most emergency calls are attended within 60-90 minutes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Honest Pricing</h3>
                <p className="text-gray-600">
                  We provide upfront quotes with no hidden fees. You'll know exactly what to expect before we start any work.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
                <p className="text-gray-600">
                  All our work is backed by comprehensive warranties. We stand behind every job we complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Plumbing Services Available in {location.name}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From emergency repairs to planned installations, we provide comprehensive plumbing services to {location.name} residents and businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border border-gray-200 group"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    Professional {service.name.toLowerCase()} in {location.name}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              24/7 Emergency Plumber in {location.name}
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              Plumbing emergencies don't wait for convenient times. That's why we provide round-the-clock emergency plumbing services to {location.name}. Our emergency plumbers are always ready to respond.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-3">We Handle:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Burst pipes and major leaks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Blocked drains and sewers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Hot water system failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Gas leaks and gas emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Overflowing toilets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Sewer backups</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Our Emergency Service Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Rapid response within 60-90 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Fully stocked service vehicles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Licensed emergency plumbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Upfront pricing, even after hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Available 24/7/365</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <a
                href="tel:1300RAPID"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition"
              >
                🚨 Call Now: 1300 RAPID
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Serving the {location.name} Community
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As your local {location.name} plumbing company, we're committed to providing the highest quality service to our community. We understand the importance of having a reliable plumber you can trust, which is why we focus on building long-term relationships with our customers.
              </p>
              <p>
                Our plumbers live and work in the Melbourne area, and many of us call {location.name} home. We're not just your plumber – we're your neighbors, and we treat every home and business with the same care we'd give our own.
              </p>
              <p>
                Whether you need routine maintenance, emergency repairs, or a complete plumbing installation, you can count on Rapid Response Plumbing to deliver professional service with a personal touch. We're proud to be {location.name}'s trusted plumbing experts.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-3">Residential Plumbing</h3>
                <p className="text-gray-600">
                  From bathroom renovations to leak repairs, we provide comprehensive residential plumbing services for {location.name} homeowners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-3">Commercial Plumbing</h3>
                <p className="text-gray-600">
                  We also service businesses in {location.name}, providing reliable commercial plumbing solutions with minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Plumber in {location.name}?
          </h2>
          <p className="text-xl mb-8">
            Contact Rapid Response Plumbing today for fast, professional service
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
