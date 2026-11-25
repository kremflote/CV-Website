import { useCallback, useEffect, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

const readTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/**
 * The initial theme is set by the inline script in index.html (system
 * preference on first visit, then the stored choice). Choosing a theme
 * stores it; until then the page keeps following the system setting.
 */
export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!readStoredTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this page view.
    }
    applyTheme(next);
  }, []);

  return { theme, setTheme };
};
