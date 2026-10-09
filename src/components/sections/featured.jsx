import Burgers from "@/assets/burger.png";
import { LuShoppingBasket } from "react-icons/lu";
import ActionButton from "../buttons/actionButton";

export default function Featured() {
  return (
    <div className="w-full mt-16">
      <div className="flex flex-col items-center">
        <div className="flex items-center w-full max-w-md gap-2">
          <div className="min-w-4 flex-1 h-px bg-accent" />
          <h2 className="text-lg uppercase">Featured Products</h2>
          <div className="min-w-4 flex-1 h-px bg-accent" />
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <div className="flex gap-2 items-center bg-second rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 h-full">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 w-1/2 p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <p className="text-lg text-accent py-2 font-bold font-alt">₱149</p>
            <ActionButton>
              <LuShoppingBasket className="text-2xl text-accent transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)" />
              <p className="text-base uppercase font-bold text-accent whitespace-nowrap transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)">
                Add to tray
              </p>
            </ActionButton>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-second rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 h-full">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 w-1/2 p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <p className="text-lg text-accent py-2 font-bold font-alt">₱149</p>
            <ActionButton>
              <LuShoppingBasket className="text-2xl text-accent transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)" />
              <p className="text-base uppercase font-bold text-accent whitespace-nowrap transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)">
                Add to tray
              </p>
            </ActionButton>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-second rounded-lg shadow-lg overflow-hidden">
          <div className="w-1/2 h-full">
            <img
              src={Burgers.src}
              about="burger"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 w-1/2 p-2">
            <h4 className="text-base uppercase">Rhons' Classic</h4>
            <p className="text-sm text-muted leading-tight">
              Juicy beefy patty, cheddar cheese, fresh lettuce, tomato, onions,
              and signature sauce.
            </p>
            <p className="text-lg text-accent py-2 font-bold font-alt">₱149</p>
            <ActionButton>
              <LuShoppingBasket className="text-2xl text-accent transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)" />
              <p className="text-base uppercase font-bold text-accent whitespace-nowrap transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)">
                Add to tray
              </p>
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}
