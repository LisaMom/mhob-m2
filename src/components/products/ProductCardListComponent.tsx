"use client";

import { useEffect, useState } from "react";
import EcommerceProductCard from "./ProductCardComponent"; 
import { Link } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading products…</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="Container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-wrap justify-center gap-4 p-8">
      {products.map(({ id, image, title, description, price }) => (
       <Link key={id} href={`product/${id}`}>
            <EcommerceProductCard
                key={id}
                image={image}
                title={title}
                description={description}
                price={price}
            />
       </Link>

      ))}
    </div>
  );
}