"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, UtensilsCrossed, RefreshCw, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EcommerceProductCard from "./ProductCardComponent";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category?: string;
  cuisine?: string;
  calories?: number;
  preparation_time_minutes?: number;
}

const ITEMS_PER_PAGE = 12;

export default function ProductCardListComponent() {
  const [products, setProducts] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://sombobaeb.cheat.casa/food-items?skip=0&limit=100");
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data: FoodItem[] = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong loading products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category || p.cuisine).filter(Boolean))) as string[]];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      (product.name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.description || "").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory ||
      product.cuisine === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchInput = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Loading Header Skeleton */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
          <div className="space-y-2">
            <div className="h-8 w-64 bg-muted rounded-xl animate-pulse" />
            <div className="h-4 w-40 bg-muted/60 rounded-lg animate-pulse" />
          </div>
          <div className="h-10 w-full md:w-72 bg-muted rounded-xl animate-pulse" />
        </div>

        {/* Skeleton Product Grid (12 circular image mockups) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border/50 bg-card overflow-hidden p-0 space-y-4 shadow-xs animate-pulse"
            >
              <div className="w-full h-60 bg-muted/20 flex items-center justify-center p-4">
                <div className="w-44 h-44 rounded-full bg-muted/60" />
              </div>
              <div className="p-5 space-y-3">
                <div className="h-5 w-3/4 bg-muted rounded-md" />
                <div className="h-4 w-full bg-muted/50 rounded-md" />
                <div className="h-4 w-2/3 bg-muted/50 rounded-md" />
                <div className="flex justify-between items-center pt-2">
                  <div className="h-6 w-20 bg-muted rounded-md" />
                  <div className="h-9 w-24 bg-muted rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center bg-destructive/10 border border-destructive/20 rounded-2xl p-8 space-y-4 shadow-sm">
          <UtensilsCrossed className="w-12 h-12 text-destructive mx-auto" />
          <h3 className="text-xl font-bold text-destructive">មានបញ្ហាក្នុងការទាញយកទិន្នន័យ</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
          <Button onClick={fetchProducts} variant="outline" className="mt-2">
            <RefreshCw className="w-4 h-4 mr-2" /> ព្យាយាមម្តងទៀត (Retry)
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header and Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <h2 className="text-3xl font-black text-foreground tracking-tight flex items-center gap-2">
            បញ្ជីម្ហូបអាហារទាំងអស់
            <Sparkles className="w-5 h-5 text-amber-500" />
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            បង្ហាញ {filteredProducts.length > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, filteredProducts.length)} ក្នុងចំណោម {filteredProducts.length} មុខម្ហូប (Page {currentPage} of {totalPages})
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="ស្វែងរកម្ហូប... (Search...)"
              value={searchQuery}
              onChange={(e) => handleSearchInput(e.target.value)}
              className="pl-9 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      {categories.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Product Grid (12 circular image mockups per page) */}
      {displayedProducts.length === 0 ? (
        <div className="text-center py-16 space-y-3 bg-muted/20 rounded-2xl border border-dashed border-border/60">
          <UtensilsCrossed className="w-12 h-12 text-muted-foreground mx-auto" />
          <h3 className="text-lg font-bold">មិនរកឃើញមុខម្ហូបឡើយ (No products found)</h3>
          <p className="text-sm text-muted-foreground">សូមព្យាយាមស្វែងរកពាក្យផ្សេងទៀត</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((item) => (
            <EcommerceProductCard
              key={item.id}
              id={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
              image={item.image_url}
              category={item.category}
              cuisine={item.cuisine}
              preparation_time_minutes={item.preparation_time_minutes}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40">
          <div className="text-xs text-muted-foreground font-medium">
            ទំព័រ {currentPage} នៃ {totalPages} (បង្ហាញ {displayedProducts.length} មុខម្ហូបក្នុង១ទំព័រ)
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="rounded-xl h-9 px-3 gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ថយក្រោយ</span>
            </Button>

            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, idx) =>
                typeof page === "number" ? (
                  <button
                    key={idx}
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 px-3 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ) : (
                  <span key={idx} className="px-1 text-xs text-muted-foreground font-bold">
                    ...
                  </span>
                )
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="rounded-xl h-9 px-3 gap-1"
            >
              <span>បន្ទាប់</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}