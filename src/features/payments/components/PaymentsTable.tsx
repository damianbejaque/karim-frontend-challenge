import {
  MoreVerticalIcon,
  DownloadIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { MOCK_PAYMENTS, STATUS_LABELS } from "../data/mockData";
import StatusBadge from "./StatusBadge";

export default function PaymentsTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h2 className="text-brand-900 text-lg leading-7 font-medium">Pagos</h2>
        <button className="p-0" aria-label="Más opciones">
          <MoreVerticalIcon className="text-brand-900" />
        </button>
      </div>

      {/* Table - Scrollable on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="min-w-37.5 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <span className="text-xs leading-4.5 font-medium text-gray-600">
                  Identificación
                </span>
              </th>
              <th className="min-w-35 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <span className="text-xs leading-4.5 font-medium text-gray-600">
                  Llave receptora
                </span>
              </th>
              <th className="min-w-30 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <span className="text-xs leading-4.5 font-medium text-gray-600">Order amount</span>
              </th>
              <th className="min-w-30 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <div className="flex items-center gap-1">
                  <span className="text-xs leading-4.5 font-medium text-gray-600">Creado</span>
                  <ArrowDownIcon className="text-gray-600" />
                </div>
              </th>
              <th className="min-w-32.5 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <div className="flex items-center gap-1">
                  <span className="text-xs leading-4.5 font-medium text-gray-600">Completado</span>
                  <ArrowDownIcon className="text-gray-600" />
                </div>
              </th>
              <th className="min-w-30 border-b border-gray-200 px-4 py-3 text-left sm:px-6">
                <span className="text-xs leading-4.5 font-medium text-gray-600">Status</span>
              </th>
              <th className="min-w-15 border-b border-gray-200 px-4 py-3 sm:px-6"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PAYMENTS.map((payment, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50">
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <span className="text-brand-900 text-sm leading-5 font-medium">{payment.id}</span>
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <span className="text-sm leading-5 font-normal text-gray-700">
                    {payment.receiverKey}
                  </span>
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <span className="text-sm leading-5 font-normal text-gray-700">
                    {payment.amount}
                  </span>
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <span className="text-sm leading-5 font-normal text-gray-700">
                    {payment.createdDate}
                  </span>
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <span className="text-sm leading-5 font-normal text-gray-700">
                    {payment.completedDate}
                  </span>
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <StatusBadge variant={payment.status} label={STATUS_LABELS[payment.status]} />
                </td>
                <td className="border-b border-gray-200 px-4 py-4 sm:px-6">
                  <button className="rounded-full p-2.5 hover:bg-gray-50" aria-label="Descargar">
                    <DownloadIcon className="text-brand-900" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination - Responsive */}
      <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <button
          className="rounded-lg p-2 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Previous page"
        >
          <ArrowLeftIcon className="text-gray-500" />
        </button>
        <span className="text-sm leading-5 font-normal text-gray-700">Página 1 de 10</span>
        <button
          className="rounded-lg p-2 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Next page"
        >
          <ArrowRightIcon className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
