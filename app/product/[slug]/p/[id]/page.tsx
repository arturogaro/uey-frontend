import { Metadata, ResolvingMetadata } from "next";

import { fetchProductAllData } from "../../../../graphql/fetch-product-data";
import Map from "../../../../components/Map/Map";
import DynamicData from "../../../../components/DynamicData/DynamicData";
import { fetchSlugs } from "../../../../graphql/fetch-slugs";
import { ProductInfoProps } from "./ProductInfoProps";

export async function generateMetadata(
  { params }: ProductInfoProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetchProductAllData(params.id);

  if (product) {
    return {
      title: product.name,
      description: product.name,
      openGraph: {
        title: product.name,
        description: product.name,
        images: [
          {
            url: product.imageUrl,
            alt: product.name,
          },
        ],
      },
    };
  }

  return {
    title: "Producto no encontrado",
    description: "Producto no encontrado",
  };
}

export default async function ProductInfo({ params }: ProductInfoProps) {
  const product = await fetchProductAllData(params.id);

  if (!product) {
    return (
      <div className="bg-white shadow rounded p-4 m-2 flex flex-col">
        <h1 className="font-bold text-lg">Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <article className="bg-white shadow rounded p-4 m-2 flex flex-col lg:flex-row gap-4 lg:gap-8 h-screen">
      <figure className="w-full lg:w-1/2">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="w-full h-64 object-cover rounded"
        />
      </figure>

      <section className="w-full lg:w-1/2 mt-4 lg:mt-0">
        <h2 className="font-bold text-lg">{product?.name}</h2>
        <h3 className="text-sm text-gray-500">Vendedor: {product?.seller}</h3>
        <p className="font-semibold text-xl">Precio: ${product?.price}</p>
        {product?.rentType !== null && (
          <p className="text-sm text-gray-500">
            Tipo de renta: {product?.rentType}
          </p>
        )}
      </section>

      <section className="w-full mt-4">
        <DynamicData
          id={params.id}
          rentType={product?.rentType}
          productType={product?.type}
        />
      </section>

      {product?.longitude !== null && product?.latitude !== null && (
        <section className="w-full mt-4">
          <Map latitude={product.latitude} longitude={product.longitude} />
        </section>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const response = await fetchSlugs();

  return response.map(({ id, slug }: { id: string; slug: string }) => ({
    id,
    slug,
  }));
}
