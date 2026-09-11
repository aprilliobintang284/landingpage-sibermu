import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a DOM element by id repeatedly and reliably.
 * Solves the Next.js / browser anchor issue where clicking the same hash
 * link multiple times stops responding if window.location.hash already matches.
 */
export function scrollToId(id: string, e?: React.SyntheticEvent) {
  if (e) {
    e.preventDefault();
  }
  if (typeof window === "undefined") return;

  const cleanId = id.startsWith("#") ? id.slice(1) : id;

  if (cleanId === "hero" || cleanId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.pushState(null, "", window.location.pathname);
    }
    return;
  }

  const targetElement = document.getElementById(cleanId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (window.location.hash !== `#${cleanId}`) {
      window.history.pushState(null, "", `#${cleanId}`);
    }
  }
}


