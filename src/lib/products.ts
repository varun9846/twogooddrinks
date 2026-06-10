export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
  tag: string;
}

export const products: Product[] = [
  {
    id: "roasted-trail-mix",
    name: "Roasted Trail Mix Drink Pack",
    category: "Healthy Drink",
    description: "A balanced roasted herbal blend for daily energy and hydration.",
    price: "$12",
    oldPrice: "$16",
    image: "/assets/img/product/1.jpg",
    badge: "New",
    tag: "Wellness",
  },
  {
    id: "mint-cooler",
    name: "Mint Cooler Herbal Tonic",
    category: "Herbal Care",
    description: "Fresh and cooling tonic made for daily wellness refreshment.",
    price: "$18",
    image: "/assets/img/product/2.jpg",
    badge: "Best Seller",
    tag: "Herbal",
  },
  {
    id: "citrus-boost",
    name: "Citrus Boost Hydration",
    category: "Cold Drinks",
    description: "Vitamin-rich citrus water for mood and energy support.",
    price: "$14",
    oldPrice: "$19",
    image: "/assets/img/product/3.jpg",
    badge: "Popular",
    tag: "Cold",
  },
  {
    id: "ginger-zen",
    name: "Ginger Zen Infusion",
    category: "Herbal Care",
    description: "A warming ginger infusion that supports digestion and calm.",
    price: "$13",
    image: "/assets/img/product/4.jpg",
    tag: "Herbal",
  },
  {
    id: "crunchy-seed-mix",
    name: "Crunchy Seed Mix Pack",
    category: "Drinks",
    description: "A crunchy seed-based wellness mix crafted for mindful daily snacking.",
    price: "$22",
    image: "/assets/img/new-product/1.jpg",
    badge: "New",
    tag: "200g",
  },
  {
    id: "tulsi-infusion",
    name: "Tulsi Infusion",
    category: "Herbal",
    description: "A soothing tulsi herbal infusion for calm and refreshing wellness.",
    price: "$6",
    oldPrice: "$8",
    image: "/assets/img/new-product/11.jpg",
    tag: "20 Tea Bags",
  },
  {
    id: "mineral-water-pack",
    name: "Mineral Water Bottle Pack",
    category: "Leaves",
    description: "Pure mineral water bottle pack for clean daily hydration.",
    price: "$1",
    image: "/assets/img/new-product/20.jpg",
    badge: "Trend",
    tag: "In Stock",
  },
  {
    id: "baked-millet-drink-bites",
    name: "Baked Millet Drink Bites",
    category: "Herbal Infusions",
    description: "Light baked millet bites made for healthy wellness routines.",
    price: "In Stock",
    image: "/assets/img/new-product/4.jpg",
    tag: "Pack",
  },
  {
    id: "jeera-digestive-drink-pack",
    name: "Jeera Digestive Drink Pack",
    category: "Botanical Beverages",
    description: "Refreshing jeera drink pack designed to support digestion.",
    price: "2 Left",
    image: "/assets/img/new-product/5.jpg",
    badge: "Sale",
    tag: "6 Bottles",
  },
  {
    id: "chamomile-herbal-blend",
    name: "Chamomile Herbal Blend",
    category: "Fruit",
    description: "Calming chamomile herbal blend for relaxing daily wellness.",
    price: "$17",
    image: "/assets/img/new-product/6.jpg",
    tag: "25 Tea Bags",
  },
  {
    id: "cumin-seed-wellness-mix",
    name: "Cumin Seed Wellness Mix",
    category: "Botanical Beverages",
    description: "A cumin seed wellness mix with bold natural flavor.",
    price: "$29",
    oldPrice: "$31",
    image: "/assets/img/new-product/2.jpg",
    tag: "20 Tea Bags",
  },
  {
    id: "natural-lemon-herbal-cooler",
    name: "Natural Lemon Herbal Cooler",
    category: "Vegetable",
    description: "A refreshing lemon herbal cooler for clean hydration.",
    price: "$10",
    image: "/assets/img/new-product/1.jpg",
    tag: "500 ml",
  },
];