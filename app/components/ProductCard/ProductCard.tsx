import Link from "next/link";
import { ProductCardProps } from "./ProductCardProps";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}/p/${product.id}`} key={product.id}>
      <article className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
        <img className="w-full" src={product.imageUrl} alt={product.name} />
        <section className="px-6 py-4">
          <strong className="font-bold text-xl mb-2">{product.name}</strong>
          <p className="text-gray-700 text-base">Tipo: {product.type}</p>
        </section>
        <section className="px-6 pt-4 pb-2">
          <strong className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
            ${product.price}
          </strong>
        </section>
      </article>
    </Link>
  );
}
