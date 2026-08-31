import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dish } from "@/lib/food";

export default function MenuItem({ dish }: { dish: Dish }) {
  return (
    <Card size="sm" className="group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 bg-background/80 text-foreground backdrop-blur-sm">
          {dish.tag}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle>{dish.name}</CardTitle>
        <p className="text-xs text-orange-600">{dish.khmer}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {dish.description}
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-lg font-bold text-orange-600">
          ${dish.price.toFixed(2)}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <Star className="size-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">4.9</span>
        </div>
        <Button size="sm" variant="secondary" className="ml-3">
          <ShoppingBag />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}