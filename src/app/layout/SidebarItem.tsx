import type { NavItem } from "@/types";
import { ChartIcon, FileIcon, LifebuoyIcon, SettingsIcon } from "@/components/icons";
import { Link, useLocation } from "react-router-dom";

const iconMap = {
  chart: ChartIcon,
  file: FileIcon,
  lifebuoy: LifebuoyIcon,
  settings: SettingsIcon,
};

export const SidebarItem = ({ label, path, icon }: NavItem) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <Link
      to={path}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
        isActive ? "text-brand-900 bg-[#e4edee]" : "text-gray-700 hover:bg-white"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className={isActive ? "text-brand-900" : "text-gray-500"} />
      <span className={`text-base leading-6 ${isActive ? "font-medium" : "font-normal"}`}>
        {label}
      </span>
    </Link>
  );
};
