"use client";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import { ProductType } from "./types/ProductType";
import { Product } from "./types/Product";
import ProductCard from "./components/ProductCard/ProductCard";
import { fetchProduct } from "./graphql/fetch-products";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<ProductType>(ProductType.ALL);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchDynamicData = async () => {
      let type = "";
      if (selectedTab !== ProductType.ALL) type = selectedTab;
      const products = await fetchProduct(type);
      setProducts(products);
    };
    fetchDynamicData();
  }, [selectedTab]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar
        selectedTab={selectedTab}
        onSelectTab={(tab: ProductType) => setSelectedTab(tab)}
      />

      <section className="flex flex-wrap justify-around">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
