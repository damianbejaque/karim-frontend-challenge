
export function useActiveRoute() {
  return window.location.pathname;
}

export function useIsRouteActive(path: string) {
  const currentPath = useActiveRoute();
  return currentPath === path;
}
