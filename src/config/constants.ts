import type { NavItem } from '@/types';
import AvatarImage from '@/assets/Avatar.png';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Pagos', path: '/payments', icon: 'chart' },
  { label: 'Reportes', path: '/reports', icon: 'file' },
  { label: 'Ayuda', path: '/help', icon: 'lifebuoy' },
  { label: 'Configuración', path: '/settings', icon: 'settings' },
];

export const CURRENT_USER = {
  name: 'Fernanda García',
  email: 'fernanda@empresa.co',
  avatar: AvatarImage,
};

export const APP_NAME = 'Tu Empresa';
