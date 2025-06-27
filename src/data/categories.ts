import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "restaurant",
    name: "restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=500&auto=format&fit=crop",
    subcategories: [
      {
        id: "drinks",
        name: "içecekler",
        image:
          "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: "toasts",
        name: "tostÇeşitleri",
        image:
          "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: "mainDishes",
        name: "anaYemekler",
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: "breakfast",
        name: "kahvaltıVeHafifYemekler",
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "minibar",
    name: "minibar",
    image:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=500&auto=format&fit=crop",
    subcategories: [
      { id: "drinks", name: "drinks" },
      { id: "snacks", name: "snacks" },
    ],
  },
  {
    id: "market",
    name: "market",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=500&auto=format&fit=crop",
    subcategories: [
      { id: "personalCare", name: "personalCare" },
      { id: "souvenirs", name: "souvenirs" },
    ],
  },
];
