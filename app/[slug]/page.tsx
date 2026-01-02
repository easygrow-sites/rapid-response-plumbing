import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug } from '@/lib/services';
import { getAllLocations, getLocationBySlug } from '@/lib/locations';
import { getServiceImage } from '@/lib/images';

interface ServiceLocationPageProps {
  params: {
    slug: string;
  };
}

// Parse slug like "emergency-plumbing-in-carlton" into service and location
function parseSlug(slug: string): { serviceSlug: string; locationSlug: string } | null {
  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;
  return { serviceSlug: parts[0], locationSlug: parts[1] };
}

export async function generateStaticParams() {
  const services = getAllServices();
  const locations = getAllLocations();
  const params: { slug: string }[] = [];

  for (const service of services) {
    for (const location of locations) {
      params.push({ slug: `${service.slug}-in-${location.slug}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  if (!parsed) return { title: 'Page Not Found' };

  const service = getServiceBySlug(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `${service.name} in ${location.name} - 24/7 Fast Response | Rapid Response Plumbing`,
    description: `Professional ${service.name.toLowerCase()} in ${location.name}. Fast, reliable service from licensed plumbers. Available 24/7 for emergencies. Call 1300 RAPID for free quote.`,
    keywords: [`${service.name.toLowerCase()} ${location.name}`, `${location.name} ${service.name.toLowerCase()}`, `best ${service.name.toLowerCase()} in ${location.name}`, `emergency ${service.name.toLowerCase()} ${location.name}`],
  };
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const parsed = parseSlug(params.slug);

  if (!parsed) {
    notFound();
  }

  const service = getServiceBySlug(parsed.serviceSlug);
  const location = getLocationBySlug(parsed.locationSlug);

  if (!service || !location) {
    notFound();
  }

  const otherServices = getAllServices().filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getServiceImage(service.slug, 0)}
            alt={`${service.name} in ${location.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional {service.name} in {location.name}
            </h1>
            <p className="text-xl mb-8">
              Fast, reliable {service.name.toLowerCase()} services for {location.name} residents and businesses. Available 24/7 for emergencies.
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
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">25+ Years</div>
              <div className="text-sm text-gray-600">Serving {location.name}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">Licensed</div>
              <div className="text-sm text-gray-600">& Insured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert {service.name} Services in {location.name}
              </h2>

              <div className="prose max-w-none text-gray-600 space-y-4 mb-8">
                <p className="text-lg leading-relaxed">
                  When you need reliable {service.name.toLowerCase()} in {location.name}, Rapid Response Plumbing is your trusted local choice. We've been serving the {location.name} community for over 25 years, providing professional {service.name.toLowerCase()} services that residents and businesses can depend on.
                </p>
                <p className="leading-relaxed">
                  Our team of licensed plumbers understands the unique needs of {location.name} properties. Whether you're dealing with an emergency situation or planning a scheduled service, we bring the expertise, equipment, and commitment to quality that ensures your {service.name.toLowerCase()} needs are handled properly the first time.
                </p>
                <p className="leading-relaxed">
                  As local {location.name} plumbers, we pride ourselves on fast response times and personalized service. We're not just another plumbing company – we're your neighbors, committed to keeping our community's plumbing systems running smoothly.
                </p>
              </div>

              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src={getServiceImage(service.slug, 1)}
                  alt={`${service.name} service in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us for {service.name} in {location.name}?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Fast response to {location.name}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Licensed & insured plumbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Upfront, honest pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Available 24/7 for emergencies</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Latest tools and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Clean, professional service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-600">Comprehensive warranties</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our {service.name} Process in {location.name}
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <span className="font-bold">Contact Us:</span> Call us or fill out our online form to describe your {service.name.toLowerCase()} needs in {location.name}.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <span className="font-bold">Fast Response:</span> Our {location.name} plumber arrives quickly, typically within 60-90 minutes for emergencies.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <span className="font-bold">Assessment & Quote:</span> We inspect the issue and provide an upfront, detailed quote before starting work.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <span className="font-bold">Professional Service:</span> Our licensed plumber completes the {service.name.toLowerCase()} work efficiently and professionally.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <span className="font-bold">Quality Check:</span> We test everything thoroughly and clean up completely before we leave.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Common {service.name} Questions in {location.name}
              </h3>
              <div className="space-y-4 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">How quickly can you respond to {location.name}?</h4>
                  <p className="text-gray-600">We typically arrive in {location.name} within 60-90 minutes for emergency calls. For scheduled appointments, we offer flexible timing to suit your schedule.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">How much does {service.name.toLowerCase()} cost in {location.name}?</h4>
                  <p className="text-gray-600">Costs vary based on the specific work required. We provide free, upfront quotes before starting any work, so you'll know exactly what to expect with no hidden fees.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Are you available for emergency {service.name.toLowerCase()}?</h4>
                  <p className="text-gray-600">Yes! We provide 24/7 emergency {service.name.toLowerCase()} services to {location.name}. Call us anytime, day or night, and we'll dispatch a plumber immediately.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Do you offer warranties on your work?</h4>
                  <p className="text-gray-600">Absolutely. All our {service.name.toLowerCase()} work comes with comprehensive warranties. We stand behind every job we complete in {location.name}.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Need {service.name} in {location.name}?</h3>
                <p className="text-gray-700 mb-6">
                  Get fast, professional {service.name.toLowerCase()} service in {location.name}. Call now or request a free quote.
                </p>
                <a
                  href="tel:1300RAPID"
                  className="block bg-primary-600 text-white px-6 py-4 rounded-lg font-bold text-center hover:bg-primary-700 transition mb-3"
                >
                  📞 Call 1300 RAPID
                </a>
                <Link
                  href="/contact"
                  className="block bg-white text-primary-600 px-6 py-4 rounded-lg font-bold text-center hover:bg-gray-50 transition border-2 border-primary-600"
                >
                  Get Free Quote
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-200">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span> 24/7 Emergency Service
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span> Same Day Service
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span> Licensed Plumbers
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span> Upfront Pricing
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">✓</span> 100% Guaranteed
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area Info */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="font-bold text-lg mb-3">📍 Serving {location.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Local {service.name.toLowerCase()} experts servicing all of {location.name} and surrounding areas.
                </p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="text-primary-600 font-semibold text-sm hover:underline"
                >
                  View all services in {location.name} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services in Location */}
      {otherServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Other Plumbing Services in {location.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherServices.map(otherService => (
                <Link
                  key={otherService.slug}
                  href={`/${otherService.slug}-in-${location.slug}`}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition border border-gray-200 group"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600">
                    {otherService.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    Professional {otherService.name.toLowerCase()} services in {location.name}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm group-hover:underline">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/locations/${location.slug}`}
                className="text-primary-600 font-semibold hover:underline"
              >
                View All Services in {location.name} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for {service.name} in {location.name}?
          </h2>
          <p className="text-xl mb-8">
            Contact Rapid Response Plumbing today for fast, professional service
          </p>
          <a
            href="tel:1300RAPID"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition"
          >
            📞 Call 1300 RAPID Now
          </a>
        </div>
      </section>
    </div>
  );
}
