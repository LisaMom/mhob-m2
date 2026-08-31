import { BadgeCheck, Flame, Leaf, type LucideIcon } from "lucide-react";

export type Dish = {
  image: string;
  name: string;
  khmer: string;
  description: string;
  price: number;
  tag: string;
};

export const dishes: Dish[] = [
  {
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    name: "Fresh Garden Bowl",
    khmer: "សាឡាត់បន្លែស្រស់",
    description:
      "Young greens, fragrant herbs and grilled veg tossed in our tangy house dressing.",
    price: 6.5,
    tag: "Vegetarian",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    name: "Charcoal Skewers",
    khmer: "សាច់អាំង",
    description:
      "Marinated chicken and beef grilled over real charcoal until smoky and tender.",
    price: 9.0,
    tag: "BBQ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop",
    name: "Honey Pancakes",
    khmer: "នំប៉ាវឃ្មុំ",
    description:
      "Fluffy golden pancakes topped with fresh berries, honey and a dusting of sugar.",
    price: 5.5,
    tag: "Breakfast",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
    name: "Melted Cheese Pizza",
    khmer: "ភីហ្សា",
    description:
      "Wood-fired crust, slow-cooked tomato sauce and lots of gooey mozzarella.",
    price: 11.0,
    tag: "Hot",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    name: "Berry Cheesecake",
    khmer: "នំខេក",
    description:
      "Silky baked cheesecake crowned with a glossy berry compote. A sweet finish.",
    price: 4.5,
    tag: "Dessert",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    name: "Herb Butter Salmon",
    khmer: "ត្រីសាម៉ុង",
    description:
      "Pan-seared salmon fillet glazed with herb butter, served with lemon.",
    price: 14.0,
    tag: "Chef's Pick",
  },
  {
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    name: "Kuy Teav Noodle Soup",
    khmer: "គុយទាវ",
    description:
      "Slow-brewed pork broth, silky rice noodles, fresh herbs and a squeeze of lime.",
    price: 7.5,
    tag: "Noodles",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
    name: "Beef Lok Lak",
    khmer: "សាច់គោឡុកឡាក់",
    description:
      "Peppery wok-tossed beef served with tomato, cucumber and lime-pepper dip.",
    price: 8.5,
    tag: "Classic",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    name: "Mango Tango Sundae",
    khmer: "អាហារផ្អែម",
    description:
      "Creamy vanilla sundae loaded with ripe mango, coconut and crushed peanuts.",
    price: 4.0,
    tag: "Dessert",
  },
];

export const categories = [
  "Street Food",
  "Noodles",
  "BBQ & Grill",
  "Vegetarian",
  "Desserts",
  "Fresh Drinks",
  "Breakfast",
  "Local Favourites",
];

export const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Leaf,
    title: "Farm fresh daily",
    description:
      "Ingredients sourced from local markets every single morning.",
  },
  {
    icon: Flame,
    title: "Grilled over charcoal",
    description:
      "Slow-cooked over real flame for that smoky, charred flavour.",
  },
  {
    icon: BadgeCheck,
    title: "Clean & certified",
    description:
      "A hygiene-certified open kitchen you can watch while you wait.",
  },
];

export const stats = [
  { value: "50+", label: "Signature dishes" },
  { value: "10k+", label: "Happy guests" },
  { value: "4.9/5", label: "Average rating" },
];