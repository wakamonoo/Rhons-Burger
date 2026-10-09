"use client";
import Image from "next/image";
import Logo from "@/assets/main_logo.png";
import { LuShoppingBasket } from "react-icons/lu";
import { TbBurger } from "react-icons/tb";
import { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import MenuOptions from "@/components/options/menuOptions";
import ActionButton from "@/components/buttons/actionButton";

export default function Navbar() {
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const menuOptionsButtonRef = useRef(null);

  return (
    <div className="fixed z-100 w-full flex justify-between items-center p-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 bg-second">
      <div className="w-20 h-auto">
        <Image src={Logo} alt="logo" className="w-full h-full object-contain" />
      </div>

      <div className="flex gap-2 items-center">
        <ActionButton>
          <LuShoppingBasket className="text-2xl shrink-0 text-accent transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)" />
          <p className="text-sm uppercase text-accent font-tall transition-all duration-200 group-hover:text-(--color-neutral) group-active:text-(--color-neutral)">
            My Tray
          </p>
        </ActionButton>

        <div className="relative">
          <button
            ref={menuOptionsButtonRef}
            onClick={() => setShowMenuOptions((prev) => !prev)}
            className="cursor-pointer group"
          >
            {showMenuOptions ? (
              <FaXmark className="text-2xl text-accent shrink-0" />
            ) : (
              <TbBurger className="text-2xl text-accent shrink-0" />
            )}
          </button>
          {showMenuOptions && (
            <MenuOptions
              setShowMenuOptions={setShowMenuOptions}
              menuOptionsButtonRef={menuOptionsButtonRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}
