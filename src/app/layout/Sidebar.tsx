import { SidebarItem } from "./SidebarItem";
import Logo from "@/assets/logomark.svg";
import { Divider, UserProfile } from "@/components/ui";
import { NAV_ITEMS, APP_NAME } from "@/config/constants";

export function Sidebar() {
  return (
    <aside className="flex h-full w-72.5 shrink-0 flex-col rounded-2xl border border-gray-200 bg-gray-50">
      <div className="flex flex-col gap-12 px-4 pt-8 pb-6">
        <div className="flex h-8 items-center gap-1">
          <img src={Logo} alt="Logo" className="h-7 w-7" />
          <span className="font-abyssinica text-title text-brand-700">{APP_NAME}</span>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </nav>
      </div>

      <div className="flex-1" />

      <div className="flex flex-col gap-6 px-4 pb-8">
        <Divider />

        <UserProfile />
      </div>
    </aside>
  );
}
