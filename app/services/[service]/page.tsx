import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllServices, getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import { getAllLocations } from '@/lib/locations';
import { getServiceImage } from '@/lib/images';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map(slug => ({ service: slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.name} Melbourne | Professional Plumbing Services`,
    description: `Expert ${service.name.toLowerCase()} services in Melbourne. ${service.description} Call 1300 RAPID for fast, reliable service.`,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices().filter(s => s.slug !== service.slug).slice(0, 3);
  const locations = getAllLocations().slice(0, 12);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={getServiceImage(service.slug, 0)}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional {service.name} in Melbourne
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            {service.description}
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
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expert {service.name} Services
              </h2>

              <div className="prose max-w-none text-gray-600 space-y-4 mb-8">
                <p className="text-lg leading-relaxed">
                  At Rapid Response Plumbing, we specialize in providing top-quality {service.name.toLowerCase()} services throughout Melbourne. With over 25 years of experience, our licensed and insured plumbers have the expertise to handle any {service.name.toLowerCase()} job, big or small.
                </p>
                <p className="leading-relaxed">
                  Whether you're dealing with an emergency situation or planning a scheduled service, our team is ready to deliver fast, reliable solutions. We understand how important it is to have functioning plumbing systems, which is why we prioritize quick response times without compromising on quality.
                </p>
                <p className="leading-relaxed">
                  Our {service.name.toLowerCase()} services are available 24/7 for emergencies, and we always provide upfront pricing with no hidden fees. You'll know exactly what to expect before we start any work.
                </p>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src={getServiceImage(service.slug, 1)}
                  alt={`${service.name} service`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our {service.name} Services?
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-600">Fast response times across all Melbourne suburbs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-600">Fully licensed and insured professional plumbers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-600">Upfront pricing with no hidden fees</span>
                </li>
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
                  <span className="text-gray-600">Clean, respectful service</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our {service.name} Process
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                    <div>
                      <span className="font-bold">Initial Assessment:</span> We thoroughly inspect and diagnose the issue to understand exactly what's needed.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                    <div>
                      <span className="font-bold">Transparent Quote:</span> You receive a detailed, upfront quote with no surprises.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                    <div>
                      <span className="font-bold">Expert Service:</span> Our licensed plumber completes the work efficiently and professionally.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                    <div>
                      <span className="font-bold">Quality Check:</span> We test everything to ensure perfect operation before we leave.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                    <div>
                      <span className="font-bold">Follow-up Support:</span> We're here if you need any assistance after the job is complete.
                    </div>
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">How quickly can you respond?</h4>
                  <p className="text-gray-600">We offer 24/7 emergency service with rapid response times across Melbourne. For urgent issues, we typically arrive within 60-90 minutes.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Do you provide warranties?</h4>
                  <p className="text-gray-600">Yes, all our work comes with comprehensive warranties. We stand behind our workmanship and the quality parts we use.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Are your plumbers licensed?</h4>
                  <p className="text-gray-600">Absolutely. All our plumbers are fully licensed, insured, and undergo regular training to stay current with industry standards.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">How much does {service.name.toLowerCase()} cost?</h4>
                  <p className="text-gray-600">Costs vary depending on the specific work required. We provide upfront quotes before starting any work so you know exactly what to expect.</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-2">Do you service my area?</h4>
                  <p className="text-gray-600">We service all Melbourne suburbs. Give us a call to confirm coverage in your specific area.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-primary-50 p-6 rounded-lg border-2 border-primary-200 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Need {service.name}?</h3>
                <p className="text-gray-700 mb-6">
                  Our expert plumbers are ready to help with your {service.name.toLowerCase()} needs.
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {service.name} Available in These Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {locations.map(location => (
              <Link
                key={location.slug}
                href={`/${service.slug}-in-${location.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="font-semibold text-gray-900 hover:text-primary-600">
                  {location.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/locations"
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {allServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allServices.map(relatedService => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition border border-gray-200"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-primary-600">
                    {relatedService.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for professional {service.name.toLowerCase()} services in Melbourne
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
