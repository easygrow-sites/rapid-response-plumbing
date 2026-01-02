import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote',
  description: 'Contact Rapid Response Plumbing for all your plumbing needs in Melbourne. Available 24/7 for emergencies. Call 1300 RAPID or request a free quote online.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch for a free quote or emergency plumbing service
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help with all your plumbing needs. Whether you have an emergency or need a quote for a project, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a href="tel:1300RAPID" className="text-primary-600 hover:text-primary-700 text-xl font-semibold">
                      1300 RAPID
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">✉️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@rapidresponseplumbing.com.au" className="text-primary-600 hover:text-primary-700">
                      info@rapidresponseplumbing.com.au
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Melbourne and surrounding suburbs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-3xl mr-4">⏰</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Hours</h3>
                    <p className="text-gray-600">
                      24/7 Emergency Service<br />
                      Regular Hours: Mon-Fri 7am-6pm, Sat 8am-4pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-primary-50 p-6 rounded-lg border-2 border-primary-200">
                <h3 className="font-bold text-lg mb-2">Emergency Service Available</h3>
                <p className="text-gray-700 mb-4">
                  Plumbing emergencies don't wait for business hours. Our team is available 24/7 to help with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Burst pipes and major leaks</li>
                  <li>✓ Blocked drains and sewers</li>
                  <li>✓ Hot water system failures</li>
                  <li>✓ Gas leaks</li>
                  <li>✓ Overflowing toilets</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            We Service All Melbourne Suburbs
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            No matter where you are in Melbourne, we're just a phone call away. Fast response times guaranteed across all service areas.
          </p>
          <div className="text-center">
            <a
              href="tel:1300RAPID"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-primary-700 transition"
            >
              📞 Call Now for Immediate Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
