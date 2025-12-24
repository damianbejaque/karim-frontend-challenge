import { InfoIcon } from "@/components/icons";

interface StatCardProps {
  title: string;
  value: string;
  showInfo?: boolean;
}

export default function StatCard({ title, value, showInfo = false }: StatCardProps) {
  return (
    <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-h6 text-kalto-black">{value}</h3>
          {showInfo && <InfoIcon className="text-kalto-black" />}
        </div>
        <p className="text-body-sm text-kalto-black-green-400 font-aeonik">{title}</p>
      </div>
    </div>
  );
}
