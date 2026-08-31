"use client";

import { useEffect, useState } from "react";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import EcommerceProductCard from "@/components/products/ProductCardComponent";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Productpage() {
  const [featured, setFeatured] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://sombobaeb.cheat.casa/food-items?skip=0&limit=8")
      .then((res) => res.json())
      .then(setFeatured)
      .catch(() => setFeatured([]));
  }, []);

  return (
    <>
      {featured.length > 0 && (
        <section className="relative overflow-hidden bg-muted/30 py-10">
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
            Featured picks
          </h2>
  
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-muted/30 to-transparent" />
        </section>
      )}

      <ProductCardListComponent />
    </>
  );
}