import Burgers from "@/assets/burger.png";
import { BiChevronRight, BiDrink } from "react-icons/bi";
import { CiBurger, CiFries } from "react-icons/ci";
import { LuSoup } from "react-icons/lu";
import { RiDrinks2Fill, RiDrinks2Line } from "react-icons/ri";

export default function Menu() {
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl w-full">
          <button className="flex items-center justify-center gap-0.5 bg-accent p-2 rounded-full">
            <CiBurger className="text-2xl text-neutral shrink-0" />
            <p className="text-sm font-bold text-neutral uppercase">Burgers</p>
          </button>
          <button className="flex items-center justify-center gap-0.5 bg-panel p-2 rounded-full">
            <CiFries className="text-2xl shrink-0" />
            <p className="text-sm font-bold text-normal uppercase">Fries</p>
          </button>
          <button className="flex items-center justify-center gap-0.5 bg-panel p-2 rounded-full">
            <LuSoup className="text-2xl shrink-0" />
            <p className="text-sm font-bold text-normal uppercase">Sides</p>
          </button>
          <button className="flex items-center justify-center gap-0.5 bg-panel p-2 rounded-full">
            <RiDrinks2Line className="text-2xl shrink-0" />
            <p className="text-sm font-bold text-normal uppercase">Combos</p>
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <div className="flex gap-2 items-stretch bg-second shadow-lg rounded-lg overflow-hidden">
          <div className="w-32 aspect-3/2">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted line-clamp-3 leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg text-accent font-bold font-alt">₱149</p>
              <button className="cursor-pointer flex items-center justify-center rounded-full p-2 bg-accent group transition-all duration-200 hover:bg-(--color-neutral) active:bg-(--color-neutral)">
                <BiChevronRight className="text-base text-neutral shrink-0 transition-all duration-200 group-hover:text-(--color-accent) group-active:text-(--color-accent)" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-stretch bg-second shadow-lg rounded-lg overflow-hidden">
          <div className="w-32 aspect-3/2">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted line-clamp-3 leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg text-accent font-bold font-alt">₱149</p>
              <button className="cursor-pointer flex items-center justify-center rounded-full p-2 bg-accent group transition-all duration-200 hover:bg-(--color-neutral) active:bg-(--color-neutral)">
                <BiChevronRight className="text-base text-neutral shrink-0 transition-all duration-200 group-hover:text-(--color-accent) group-active:text-(--color-accent)" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-stretch bg-second shadow-lg rounded-lg overflow-hidden">
          <div className="w-32 aspect-3/2">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted line-clamp-3 leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-lg text-accent font-bold font-alt">₱149</p>
              <button className="cursor-pointer flex items-center justify-center rounded-full p-2 bg-accent group transition-all duration-200 hover:bg-(--color-neutral) active:bg-(--color-neutral)">
                <BiChevronRight className="text-base text-neutral shrink-0 transition-all duration-200 group-hover:text-(--color-accent) group-active:text-(--color-accent)" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
