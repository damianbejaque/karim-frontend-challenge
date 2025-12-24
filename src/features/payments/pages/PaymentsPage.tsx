import { Button } from "@/components/ui";
import StatCard from "../components/StatCard";
import SearchBar from "../components/SearchBar";
import PaymentsTable from "../components/PaymentsTable";
import CreateTransactionModal from "../components/CreateTransactionModal";
import Toast from "@/components/ui/Toast";
import { FilterIcon } from "@/components/icons";
import { useState } from "react";

export const PaymentsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSuccess = (message: string) => {
    setToast({ message, type: "success" });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  return (
    <div className="bg-gray-25 flex w-full flex-col gap-6 px-4 pt-6 pb-12 sm:gap-8 sm:pt-8 lg:px-0">
      <div className="w-full">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div className="flex-1">
            <h1 className="text-display-sm text-brand-900">Pagos</h1>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto"
            >
              Crear transacción
            </Button>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <StatCard title="Saldo en tu cuenta *8495" value="$23.421.350" />
        <StatCard title="Pagos este mes" value="15" showInfo={true} />
        <StatCard title="Total pagos este mes" value="$6.026.800" />
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <SearchBar />
        <button
          className="shrink-0 rounded-full border border-gray-300 bg-white p-2.5 transition-colors hover:bg-gray-50"
          aria-label="Filter"
        >
          <FilterIcon className="text-brand-900" />
        </button>
      </div>

      <div className="w-full">
        <PaymentsTable />
      </div>

      <CreateTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={!!toast}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};
