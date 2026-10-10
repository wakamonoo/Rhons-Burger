"use client";
import Burgers from "@/assets/burger.png";
import { ProductContext } from "@/context/productContext";
import { useContext, useState } from "react";
import { BiChevronRight, BiDrink, BiGridAlt } from "react-icons/bi";
import { CiBurger, CiFries } from "react-icons/ci";
import { GiHotDog } from "react-icons/gi";
import { LuSoup, LuUtensils } from "react-icons/lu";
import { RiDrinks2Fill, RiDrinks2Line } from "react-icons/ri";

const categories = [
  { name: "All", value: "all" },
  { name: "Burgers", value: "burgers" },
  { name: "Fries", value: "fries" },
  { name: "Hotdogs", value: "hotdogs" },
  { name: "Sides", value: "sides" },
  { name: "Drinks", value: "drinks" },
];

export default function Menu() {
  const { products } = useContext(ProductContext);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="w-full mt-16">
      <div className="flex flex-col items-center">
        <div className="flex items-center w-full max-w-md gap-2">
          <div className="min-w-4 flex-1 h-px bg-accent" />
          <h2 className="text-lg uppercase">Our Menu</h2>
          <div className="min-w-4 flex-1 h-px bg-accent" />
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 max-w-4xl w-full">
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`cursor-pointer flex items-center justify-center gap-0.5 p-2 rounded-full transition-all duration-200 group hover:bg-(--color-accent) active:bg-(--color-accent) ${isActive ? "bg-accent" : "bg-panel"}`}
              >
                {category.value === "all" && (
                  <BiGridAlt
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}
                {category.value === "burgers" && (
                  <CiBurger
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}
                {category.value === "fries" && (
                  <CiFries
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}
                {category.value === "hotdogs" && (
                  <GiHotDog
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}
                {category.value === "sides" && (
                  <LuUtensils
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}
                {category.value === "drinks" && (
                  <RiDrinks2Line
                    className={`text-2xl shrink-0 group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                  />
                )}

                <span
                  className={`text-base font-bold uppercase group-hover:text-(--color-neutral) group-active:text-(--color-neutral) ${isActive ? "text-neutral" : "text-normal"}`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.productId}
              className="flex gap-2 items-stretch bg-second shadow-lg rounded-lg overflow-hidden"
            >
              <div className="w-32 aspect-3/2">
                <img
                  src={product?.photo}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col w-full p-2">
                <h4 className="text-base uppercase">{product?.name}</h4>
                <p className="text-sm text-muted line-clamp-3 leading-tight">
                  {product?.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg text-accent font-bold font-alt">
                    ₱{product?.price}
                  </p>
                  <button className="cursor-pointer flex items-center justify-center rounded-full p-2 bg-accent group transition-all duration-200 hover:bg-(--color-neutral) active:bg-(--color-neutral)">
                    <BiChevronRight className="text-base text-neutral shrink-0 transition-all duration-200 group-hover:text-(--color-accent) group-active:text-(--color-accent)" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
