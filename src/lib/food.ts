export interface Dish {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  spicy?: boolean;
  popular?: boolean;
}

export const categories: string[] = [
  "Khmer Street Food",
  "Noodles",
  "BBQ",
  "Soups",
  "Desserts",
  "Drinks",
];

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Num Banh Chok",
    category: "Khmer Street Food",
    price: 3.5,
    description: "Fresh rice noodles topped with a fragrant green fish-based curry sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    popular: true,
  },
  {
    id: "2",
    name: "Kuy Teav",
    category: "Noodles",
    price: 4.0,
    description: "Pork bone broth noodle soup with rice noodles, herbs, and crispy garlic.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
  },
  {
    id: "3",
    name: "Khmer BBQ Skewers",
    category: "BBQ",
    price: 6.5,
    description: "Charcoal-grilled marinated pork skewers served with pickled vegetables.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800",
    spicy: true,
  },
  {
    id: "4",
    name: "Samlor Machu",
    category: "Soups",
    price: 5.0,
    description: "Tangy Khmer sour soup with fish, pineapple, and fresh herbs.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
  },
  {
    id: "5",
    name: "Nom Kom",
    category: "Desserts",
    price: 2.0,
    description: "Sticky rice dumplings filled with palm sugar and shredded coconut.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
  },
  {
    id: "6",
    name: "Sugarcane Juice",
    category: "Drinks",
    price: 1.5,
    description: "Freshly pressed sugarcane juice served over ice with a hint of lime.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800",
  },
];