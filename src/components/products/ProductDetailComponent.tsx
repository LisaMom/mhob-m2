"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CircleCheck,
  Clock,
  Flame,
  ShoppingBag,
  Utensils,
  Star,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FoodItemDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category?: string;
  cuisine?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  ingredients?: string[] | string;
  preparation_time_minutes?: number;
  meal_types?: string[];
  average_rating?: number | null;
  rating_count?: number;
  available?: boolean;
}

interface ProductDetailProps {
  className?: string;
  id: string;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop";

const ProductDetail1 = ({ className, id }: ProductDetailProps) => {
  const [singleProduct, setSingleProduct] = useState<FoodItemDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://sombobaeb.cheat.casa/food-items/${id}`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data: FoodItemDetail = await res.json();
        setSingleProduct(data);
        setImgSrc(data.image_url || FALLBACK_IMAGE);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch product detail");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <section className={cn("py-16 md:py-24", className)}>
        <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center space-y-4 min-h-[400px]">
          <RefreshCw className="w-10 h-10 animate-spin text-primary" />
          <p className="text-muted-foreground font-medium animate-pulse">
            កំពុងទាញយកព័ត៌មានលម្អិត... (Loading product details...)
          </p>
        </div>
      </section>
    );
  }

  if (error || !singleProduct) {
    return (
      <section className={cn("py-16 md:py-24 animate-in fade-in duration-300", className)}>
        <div className="container mx-auto px-4 max-w-lg text-center space-y-6 bg-destructive/10 border border-destructive/20 rounded-2xl p-8 shadow-sm">
          <AlertTriangle className="w-12 h-12 text-destructive mx-auto animate-bounce" />
          <h2 className="text-2xl font-bold text-destructive">មិនអាចរកឃើញមុខម្ហូបនេះទេ</h2>
          <p className="text-muted-foreground">{error ?? "Product not found"}</p>
          <Link href="/product">
            <Button variant="default" className="hover:scale-105 transition-transform">
              <ArrowLeft className="w-4 h-4 mr-2" /> ត្រឡប់ទៅទំព័រមុខម្ហូប (Back to Products)
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const ingredientsList: string[] = Array.isArray(singleProduct.ingredients)
    ? singleProduct.ingredients
    : typeof singleProduct.ingredients === "string"
    ? (singleProduct.ingredients as string).split(",").map((s) => s.trim())
    : [];

  return (
    <section className={cn("py-8 md:py-16 bg-background animate-in fade-in duration-500", className)}>
      <div className="container mx-auto px-4 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/product"
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary hover:-translate-x-1 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> ត្រឡប់ទៅបញ្ជីម្ហូបទាំងអស់ (Back to All Products)
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Column: Image with Smooth Zoom */}
          <div className="space-y-4 animate-in slide-in-from-left-6 duration-500">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-md group">
              <img
                src={imgSrc}
                onError={() => setImgSrc(FALLBACK_IMAGE)}
                alt={singleProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {singleProduct.available !== false && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-emerald-500/90 text-white font-semibold px-3 py-1 shadow-md animate-in zoom-in-75 duration-300">
                    <CircleCheck className="w-3.5 h-3.5 mr-1" /> មានលក់ (Available)
                  </Badge>
                </div>
              )}
            </div>

            {/* Badges bar */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {singleProduct.cuisine && (
                <span className="bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold text-secondary-foreground transition-all duration-200 hover:scale-105">
                  Cuisine: {singleProduct.cuisine}
                </span>
              )}
              {singleProduct.category && (
                <span className="bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold text-secondary-foreground transition-all duration-200 hover:scale-105">
                  Category: {singleProduct.category}
                </span>
              )}
              {singleProduct.meal_types && singleProduct.meal_types.length > 0 && (
                <span className="bg-secondary/80 hover:bg-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold text-secondary-foreground transition-all duration-200 hover:scale-105">
                  Meal: {singleProduct.meal_types.join(", ")}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="space-y-6 animate-in slide-in-from-right-6 duration-500">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                {singleProduct.name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-primary tracking-tight">
                  ${singleProduct.price.toFixed(2)}
                </span>
                {singleProduct.average_rating ? (
                  <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-3 py-1 rounded-lg text-sm font-bold shadow-xs">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>{singleProduct.average_rating}</span>
                    <span className="text-xs text-muted-foreground">({singleProduct.rating_count || 0})</span>
                  </div>
                ) : null}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed pt-2">
                {singleProduct.description}
              </p>
            </div>

            {/* Nutrition & Prep Time Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-border/60">
              {singleProduct.preparation_time_minutes && (
                <div className="bg-secondary/40 hover:bg-secondary/70 p-3.5 rounded-2xl text-center space-y-1 transition-all duration-200 hover:scale-105">
                  <Clock className="w-5 h-5 text-primary mx-auto" />
                  <p className="text-xs text-muted-foreground font-medium">ពេលរង់ចាំ</p>
                  <p className="text-sm font-extrabold">{singleProduct.preparation_time_minutes} នាទី</p>
                </div>
              )}
              {singleProduct.calories && (
                <div className="bg-secondary/40 hover:bg-secondary/70 p-3.5 rounded-2xl text-center space-y-1 transition-all duration-200 hover:scale-105">
                  <Flame className="w-5 h-5 text-orange-500 mx-auto" />
                  <p className="text-xs text-muted-foreground font-medium">កាឡូរី</p>
                  <p className="text-sm font-extrabold">{singleProduct.calories} cal</p>
                </div>
              )}
              {singleProduct.protein !== undefined && (
                <div className="bg-secondary/40 hover:bg-secondary/70 p-3.5 rounded-2xl text-center space-y-1 transition-all duration-200 hover:scale-105">
                  <Utensils className="w-5 h-5 text-blue-500 mx-auto" />
                  <p className="text-xs text-muted-foreground font-medium">Protein</p>
                  <p className="text-sm font-extrabold">{singleProduct.protein}g</p>
                </div>
              )}
              {singleProduct.carbs !== undefined && (
                <div className="bg-secondary/40 hover:bg-secondary/70 p-3.5 rounded-2xl text-center space-y-1 transition-all duration-200 hover:scale-105">
                  <Utensils className="w-5 h-5 text-emerald-500 mx-auto" />
                  <p className="text-xs text-muted-foreground font-medium">Carbs</p>
                  <p className="text-sm font-extrabold">{singleProduct.carbs}g</p>
                </div>
              )}
            </div>

            {/* Ingredients */}
            {ingredientsList.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
                  គ្រឿងផ្សំ (Ingredients)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {ingredientsList.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="bg-accent/80 hover:bg-accent text-accent-foreground text-xs px-3 py-1.5 rounded-xl font-medium border border-border/50 transition-all duration-200 hover:scale-105"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Animated Action Buttons */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold">ចំនួន (Quantity):</span>
                <div className="flex items-center border border-border rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 bg-secondary text-foreground hover:bg-secondary/80 active:scale-95 font-bold transition-all"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 font-bold min-w-12 text-center text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 bg-secondary text-foreground hover:bg-secondary/80 active:scale-95 font-bold transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className={cn(
                    "flex-1 font-bold text-base py-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
                    addedToCart && "bg-emerald-600 hover:bg-emerald-700 text-white"
                  )}
                  onClick={() => setQuantity(quantity)}
                >
                  {addedToCart ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2 animate-in zoom-in duration-200" />
                      បានបន្ថែមទៅកន្រ្តក! (Added to Cart)
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      បញ្ជាទិញឥឡូវនេះ (Order Now)
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductDetail1 };