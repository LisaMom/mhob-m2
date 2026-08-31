import { Flame, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Dish } from "@/lib/food";

interface MenuItemProps {
  dish: Dish;
}

export default function MenuItem({ dish }: MenuItemProps) {
  const { name, category, price, description, image, spicy, popular } = dish;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {popular && (
            <Badge className="bg-orange-500 text-white hover:bg-orange-500">
              <TrendingUp className="size-3" />
              Popular
            </Badge>
          )}
          {spicy && (
            <Badge variant="destructive">
              <Flame className="size-3" />
              Spicy
            </Badge>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight">{name}</h3>
          <span className="whitespace-nowrap font-bold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>
        <Badge variant="outline" className="w-fit text-xs text-muted-foreground">
          {category}
        </Badge>
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}