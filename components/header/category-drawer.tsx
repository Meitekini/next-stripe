import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Link, MenuIcon } from "lucide-react";
import { categories } from "@/lib/constants";

const CategoryDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-lg font-semibold">
            elect a Category
          </DrawerTitle>
          <div className=" space-y-1 mt-4">
            {categories.map((category, index) => (
              <Button variant="ghost" key={index} className="w-full">
                {category}
              <DrawerClose asChild>
                <Link href={`/search?category=${category.toLowerCase()}`}>
                  <span className="sr-only">Go to {category}</span>
                </Link>
              </DrawerClose>
              </Button>))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
// This component is a placeholder for the category drawer functionality.
