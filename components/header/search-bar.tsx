import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { getAllCategories } from '@/lib/actions/product.actions';
import { SearchIcon } from "lucide-react";
const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Health & Beauty",
  "Sports & Outdoors",
  "Toys & Games",
  "Books & Media",
  "Automotive",
  "Groceries & Gourmet Food",
  "Office Supplies",
  "Jewelry & Accessories",
  "Baby Products",
  "Pet Supplies",
  "Tools & Home Improvement",
  "Musical Instruments",
  "Arts & Crafts",
  "Garden & Outdoor",
  "Footwear",
  "Watches",
  "Luggage & Travel Gear",
];

const Search = async () => {
  //   const categories = await getAllCategories();

  return (
    <form action="/search" method="GET">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Select name="category">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key="All" value="all">
              All
            </SelectItem>
            {categories.map((x) => (
              <SelectItem key={x} value={x}>
                {x}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          name="q"
          type="text"
          placeholder="Search..."
          className="md:w-[100px] lg:w-[300px]"
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default Search;
