import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS, APP_NAME } from '@/config/constants';

export function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const currentNavItem = NAV_ITEMS.find(item => item.path === location.pathname);
    const pageTitle = currentNavItem ? currentNavItem.label : 'Pagos';
    document.title = `${pageTitle} - ${APP_NAME}`;
  }, [location.pathname]);
}
