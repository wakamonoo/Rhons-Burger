"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { LuHistory, LuLogOut, LuUserRoundPlus } from "react-icons/lu";
import { UserContext } from "@/context/userContext";

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
        <button className="cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-(--color-secondary)">
          <LuHistory className="text-base text-normal" />
          <p className="text-base text-normal font-semibold whitespace-nowrap">
            Order History
          </p>
        </button>
        {isLogged ? (
          <button
            onClick={() => {
              setShowMenuOptions(false);
              setShowSignInModal(true);
            }}
            className="cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-(--color-secondary)"
          >
            <LuLogOut className="text-base text-normal" />
            <p className="text-base text-normal font-semibold whitespace-nowrap">
              Sign Out
            </p>
          </button>
        ) : (
          <button
            onClick={() => {
              setShowMenuOptions(false);
              setShowSignInModal(true);
            }}
            className="cursor-pointer flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-(--color-secondary)"
          >
            <LuUserRoundPlus className="text-base text-normal" />
            <p className="text-base text-normal font-semibold whitespace-nowrap">
              Sign In
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
