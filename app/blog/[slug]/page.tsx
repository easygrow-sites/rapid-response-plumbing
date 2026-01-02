import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs, getAllBlogPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Rapid Response Plumbing Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  const htmlContent = markdownToHtml(post.content);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16">
        {post.featuredImage && (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm mb-4 opacity-90">
            {new Date(post.date).toLocaleDateString('en-AU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} • By {post.author}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {post.featuredImage && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl mb-8">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Additional Images */}
            {post.images && post.images.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 my-8">
                {post.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${post.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </article>

          {/* Author Info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lg">{post.author}</div>
                <div className="text-gray-600">Plumbing Expert</div>
              </div>
            </div>
            <p className="text-gray-600">
              Expert plumber with years of experience serving the Melbourne community. Passionate about sharing knowledge to help homeowners maintain their plumbing systems.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary-50 rounded-lg border-2 border-primary-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Professional Plumbing Help?</h3>
            <p className="text-gray-600 mb-6">
              Our expert plumbers are available 24/7 to help with any plumbing issue.
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
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition border-2 border-primary-600"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-primary-600">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm">
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
