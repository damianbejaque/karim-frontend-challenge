import { useState } from "react";
import { XIcon } from "@/components/icons";
import { NAV_ITEMS } from "@/config/constants";
import { SidebarItem } from "./SidebarItem";
import { Divider, UserProfile } from "@/components/ui";

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="bg-brand-900 flex h-8 w-8 items-center justify-center rounded-lg">
      <svg
        width="17"
        height="21"
        viewBox="0 0 17 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.5 0L0 5.25V15.75L8.5 21L17 15.75V5.25L8.5 0Z" fill="white" />
      </svg>
    </div>
    <span className="text-brand-900 text-xl font-bold">KAMIN</span>
  </div>
);

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm lg:hidden">
        <div className="flex h-16 items-center justify-between px-4 py-3">
          <Logo />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
        <div className="h-px w-full bg-gray-200" />
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 z-50 flex w-64 flex-col bg-gray-50 shadow-xl lg:hidden">
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg p-2 transition-colors hover:bg-gray-100"
              >
                <XIcon size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 p-4">
              {NAV_ITEMS.map((item) => (
                <SidebarItem key={item.path} {...item} />
              ))}
            </nav>

            <div className="flex-1" />

            <div className="flex flex-col gap-6 px-4 pb-8">
              <Divider />
              <UserProfile />
            </div>
          </div>
        </>
      )}
    </>
  );
}
