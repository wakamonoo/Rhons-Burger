"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LuHistory, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import { UserContext } from "@/context/userContext";
import MenuButton from "../buttons/menuButton";
import { RiAdminLine } from "react-icons/ri";

export default function MenuOptions({
  setShowMenuOptions,
  menuOptionsButtonRef,
}) {
  const { setShowSignInModal, isLogged } = useContext(UserContext);
  const divRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    function handleOutClick(e) {
      if (
        divRef.current &&
        !divRef.current.contains(e.target) &&
        menuOptionsButtonRef.current &&
        !menuOptionsButtonRef.current.contains(e.target)
      ) {
        setShowMenuOptions(false);
      }
    }
    document.addEventListener("pointerdown", handleOutClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutClick);
    };
  }, [setShowMenuOptions, menuOptionsButtonRef]);

  return (
    <div
      ref={divRef}
      className="absolute top-14 right-0 h-fit w-fit bg-panel rounded-lg shadow-2xl p-2 z-100"
    >
      <div className="flex flex-col">
        <MenuButton
          onClick={() => {
            setShowMenuOptions(false);
            router.push("/admin");
          }}
        >
          <RiAdminLine className="text-base text-normal" />
          <p className="text-base text-normal font-semibold whitespace-nowrap">
            Admin Dashboard
          </p>
        </MenuButton>
        <MenuButton>
          <LuHistory className="text-base text-normal" />
          <p className="text-base text-normal font-semibold whitespace-nowrap">
            Order History
          </p>
        </MenuButton>

        {isLogged ? (
          <MenuButton
            onClick={() => {
              setShowMenuOptions(false);
              setShowSignInModal(true);
            }}
          >
            <LuLogOut className="text-base text-normal" />
            <p className="text-base text-normal font-semibold whitespace-nowrap">
              Sign Out
            </p>
          </MenuButton>
        ) : (
          <MenuButton
            onClick={() => {
              setShowMenuOptions(false);
              setShowSignInModal(true);
            }}
          >
            <LuUserRoundPlus className="text-base text-normal" />
            <p className="text-base text-normal font-semibold whitespace-nowrap">
              Sign In
            </p>
          </MenuButton>
        )}
      </div>
    </div>
  );
}
