import type { Payment } from '@/types';

export const MOCK_PAYMENTS: Payment[] = [
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@matbadillo',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 13, 2025',
    completedDate: 'Jan 13, 2025',
    status: 'pending',
  },
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@edugarcia',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 13, 2025',
    completedDate: 'Jan 13, 2025',
    status: 'completed',
  },
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@samanthalopez',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 13, 2025',
    completedDate: 'Jan 13, 2025',
    status: 'completed',
  },
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@pamelagonzl',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 13, 2025',
    completedDate: 'Jan 13, 2025',
    status: 'rejected',
  },
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@pacofernandz',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 12, 2025',
    completedDate: 'Jan 12, 2025',
    status: 'completed',
  },
  {
    id: 'SOsFOz5...OYPEopC',
    receiverKey: '@zhulinhan',
    amount: '$5,000.00 COP',
    createdDate: 'Jan 12, 2025',
    completedDate: 'Jan 12, 2025',
    status: 'completed',
  },
];

export const STATUS_LABELS = {
  pending: 'Pendiente',
  completed: 'Completada',
  rejected: 'Rechazado',
} as const;
