"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductInfer {
  id?: string;
  image: string;
  title: string;
  description?: string;
  price?: number;
  category?: string;
  cuisine?: string;
  preparation_time_minutes?: number;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop";

const getDeliveryDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  const day = date.getDate();
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
  const suffix = ["th", "st", "nd", "rd"][
    day % 10 > 3 ? 0 : (day % 100 - day % 10 !== 10 ? day % 10 : 0)
  ];
  return `${day}${suffix} ${month}`;
};

export default function EcommerceProductCard({
  id,
  image,
  title,
  description,
  price,
  category,
  cuisine,
  preparation_time_minutes,
}: ProductInfer) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [inBag, setInBag] = useState(false);
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_IMAGE);

  const tag = category || cuisine || "food";
  const detailHref = id ? `/product/${id}` : "#";

  return (
    <Card className="w-full rounded-3xl overflow-hidden p-0 border border-border/50 bg-card shadow-xs flex flex-col justify-between group/card">
      {/* ── Rectangular Image, consistent with card shape ── */}
      <Link href={detailHref} className="block relative overflow-hidden h-56 bg-muted">
        <img
          src={imgSrc}
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
          alt={title}
        />

        {/* Subtle hover gradient for badge/text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Top Left Category Badge */}
        <Badge className="absolute top-3 left-3 bg-black/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm hover:bg-black z-10">
          {tag}
        </Badge>

        {/* Top Right Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          title="Wishlist"
          className={cn(
            "absolute top-3 right-3 h-8 w-8 rounded-full border shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-10",
            isWishlisted
              ? "bg-rose-50 border-rose-200 dark:bg-rose-950 dark:border-rose-800"
              : "bg-white/90 backdrop-blur-md dark:bg-black/80"
          )}
        >
          <Heart
            className={cn(
              "w-3.5 h-3.5 transition-colors",
              isWishlisted ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
            )}
          />
        </button>
      </Link>

      {/* ── Content Zone ── */}
      <CardContent className="p-5 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <Link href={detailHref} className="block group/title">
            <h3 className="text-base font-bold text-foreground group-hover/title:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
          </Link>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-2 pt-2">
                    {/* Price row — only render if price is provided */}
          {price !== undefined && (
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">↓21%</span>
              <span className="text-muted-foreground line-through text-xs">
                ${(price * 1.21).toFixed(2)}
              </span>
              <span className="text-foreground font-black text-base">${price.toFixed(2)}</span>
            </div>
          )}

          <div className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            {preparation_time_minutes ? (
              <span>Ready in <strong className="text-foreground font-bold">{preparation_time_minutes} min</strong></span>
            ) : (
              <span>Delivery by <strong className="text-foreground font-bold">{getDeliveryDate()}</strong></span>
            )}
          </div>
        </div>
      </CardContent>

      {/* ── Action Buttons Zone ── */}
      <CardFooter className="px-5 pb-5 pt-0 gap-2 bg-transparent border-t-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            setInBag(!inBag);
          }}
          title={inBag ? "Remove from bag" : "Add to bag"}
          className={cn(
            "h-11 w-11 shrink-0 rounded-xl border flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95",
            inBag
              ? "bg-foreground text-background border-foreground"
              : "bg-background text-muted-foreground hover:border-foreground/50 hover:text-foreground"
          )}
        >
          <ShoppingBag className="w-4.5 h-4.5" />
        </button>

        <Link href={detailHref} className="flex-1">
          <Button
            variant="default"
            className="w-full h-11 rounded-xl font-bold text-sm bg-black hover:bg-black/90 text-white transition-all shadow-sm"
          >
            Buy Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}