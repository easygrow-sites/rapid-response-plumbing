import Link from 'next/link';

interface LocationCardProps {
  name: string;
  slug: string;
}

export default function LocationCard({ name, slug }: LocationCardProps) {
  return (
    <Link
      href={`/locations/${slug}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200 group"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition">
            {name}
          </h3>
          <p className="text-gray-600 text-sm">
            Professional plumbing services
          </p>
        </div>
        <div className="text-primary-600 text-2xl">
          📍
        </div>
      </div>
      <div className="mt-4">
        <span className="text-primary-600 font-semibold group-hover:underline text-sm">
          View Services →
        </span>
      </div>
    </Link>
  );
}
