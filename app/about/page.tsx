import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { teamImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Us - Melbourne Plumbing Experts',
  description: 'Learn about Rapid Response Plumbing - Melbourne\'s trusted plumbing service with over 25 years of experience. Licensed, insured, and committed to excellence.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rapid Response Plumbing</h1>
          <p className="text-xl max-w-3xl">
            Melbourne's trusted plumbing experts for over 25 years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998, Rapid Response Plumbing has grown from a small family business to become one of Melbourne's most trusted plumbing service providers. Our commitment to quality workmanship and exceptional customer service has earned us a reputation for excellence throughout the Melbourne area.
                </p>
                <p>
                  With over 25 years of experience, we've seen and solved just about every plumbing problem imaginable. From emergency burst pipes to complete bathroom renovations, our team of licensed professionals brings expertise, reliability, and a customer-first approach to every job.
                </p>
                <p>
                  We understand that plumbing issues can be stressful and disruptive. That's why we're available 24/7 to provide fast, reliable service when you need it most. Our goal is not just to fix your plumbing problem, but to provide peace of mind and long-lasting solutions.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={teamImages[0]}
                alt="Professional plumber at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every job is completed to the highest standards using quality materials and proven techniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Honest & Transparent</h3>
              <p className="text-gray-600">
                No hidden fees or surprise charges. We provide upfront quotes and clear communication throughout every project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                True to our name, we pride ourselves on fast response times and efficient service that gets you back to normal quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={teamImages[0]}
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed Plumbers</h3>
              <p className="text-gray-600">
                All our plumbers are fully licensed and undergo continuous training to stay current with the latest techniques and regulations.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={teamImages[1]}
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
              <p className="text-gray-600">
                With decades of combined experience, our team has the knowledge to handle any plumbing challenge efficiently.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={teamImages[2]}
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focused</h3>
              <p className="text-gray-600">
                We treat every home and business with respect, ensuring clean workspaces and professional service every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Credentials</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">✓</div>
              <div className="font-semibold">Fully Licensed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="font-semibold">Insured & Bonded</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-semibold">Award Winning</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">♻️</div>
              <div className="font-semibold">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">
            Contact us today for reliable, professional plumbing services
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
