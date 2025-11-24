import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  slug: string;
  title: string;
  price: string;
  badge?: string;
  image: string;
}

export function ProductCard({ slug, title, price, badge, image }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-100 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.08em] shadow-soft">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <p className="font-medium text-neutral-900">{title}</p>
          <p className="text-neutral-500 text-sm">Modern tailoring</p>
        </div>
        <p className="font-semibold text-neutral-900">{price}</p>
      </div>
    </Link>
  );
}
