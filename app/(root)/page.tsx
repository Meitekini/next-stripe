import { getFeaturedProducts } from "@/lib/utils";


export default async function HomePage() {

    // This is the main entry point for the root layout of the application.
    const featuredProducts =  getFeaturedProducts();
    
  return (
    <>
    {featuredProducts.length > 0 && (
        <></>
    )}
    </>
  );
};
