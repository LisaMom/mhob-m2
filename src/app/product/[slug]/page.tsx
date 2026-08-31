
// import { ProductDetail1 } from "@/components/product-detail-1";
import { ProductDetail1 } from "@/components/products/ProductDetailComponent";


interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  return <ProductDetail1 id={slug} />;
}
