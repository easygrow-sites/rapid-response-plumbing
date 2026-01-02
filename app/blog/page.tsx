import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Plumbing Tips & Advice Blog | Rapid Response Plumbing',
  description: 'Expert plumbing tips, maintenance advice, and industry news from Melbourne\'s trusted plumbing professionals. Learn how to maintain your plumbing systems.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plumbing Tips & Advice</h1>
          <p className="text-xl max-w-3xl">
            Expert advice and helpful tips from Melbourne's plumbing professionals
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Posts Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We're working on helpful plumbing articles and tips. Check back soon!
              </p>
              <Link
                href="/"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Return to Homepage
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Professional Plumbing Help?</h2>
          <p className="text-xl text-gray-600 mb-8">
            While DIY tips are great, some jobs require professional expertise. We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300RAPID"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition"
            >
              📞 Call 1300 RAPID
            </a>
            <Link
              href="/contact"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
