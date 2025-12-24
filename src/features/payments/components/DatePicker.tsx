import { CalendarIcon } from "@/components/icons";

export default function DatePicker() {
  return (
    <button className="flex items-center gap-2 rounded-4xl border border-gray-200 bg-white px-4 py-2.5">
      <CalendarIcon className="text-brand-900" />
      <span className="text-brand-900 text-sm leading-5 font-normal">
        Sep 15, 2025 – Oct 15, 2025
      </span>
    </button>
  );
}
