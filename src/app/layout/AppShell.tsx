import { Sidebar } from "./Sidebar";
import { MobileHeader } from "./MobileHeader";
import { usePageTitle } from "@/hooks";

export function AppShell({ children }: { children: React.ReactNode }) {
  usePageTitle();

  return (
    <>
      <MobileHeader />
      <div className="flex h-screen gap-6 overflow-hidden bg-white lg:p-6">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main className="bg-gray-25 flex-1 overflow-auto pt-16 lg:pt-0">{children}</main>
      </div>
    </>
  );
}
