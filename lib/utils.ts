import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import sampleData from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = sampleData.products.map((category) => category);
export const getCategoryBySlug = (slug: string) => {
  return sampleData.products.find((product) => product.slug === slug);
};
export const getCategoryByName = (name: string) => {
  return sampleData.products.filter((product) => product.category === name);
};
export const getFeaturedProducts = () => {
  return sampleData.products.filter((product) => product.isFeatured);
};
export const getProductsByCategory = (category: string) => {
  return sampleData.products.filter((product) => product.category === category);
};

export const getAllCategories = () => {
  return Array.from(
    new Set(sampleData.products.map((product) => product.category))
  );
};

// export const getAllProducts = () =>{

// }