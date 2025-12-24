import { SearchIcon } from "@/components/icons";

export default function SearchBar() {
  return (
    <div className="relative w-full sm:w-100">
      <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3.5 py-2.5">
        <SearchIcon className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="Buscar..."
          className="flex-1 bg-transparent text-base leading-6 font-normal text-gray-500 outline-none placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}
