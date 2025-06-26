import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "restaurant",
    name: "restaurant",
    subcategories: [
      { id: "breakfast", name: "breakfast" },
      { id: "lunch", name: "lunch" },
      { id: "dinner", name: "dinner" },
    ],
  },
  {
    id: "minibar",
    name: "minibar",
    subcategories: [
      { id: "drinks", name: "drinks" },
      { id: "snacks", name: "snacks" },
    ],
  },
  {
    id: "market",
    name: "market",
    subcategories: [
      { id: "personalCare", name: "personalCare" },
      { id: "souvenirs", name: "souvenirs" },
    ],
  },
];
