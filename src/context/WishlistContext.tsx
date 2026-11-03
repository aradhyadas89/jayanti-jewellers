"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { JewelleryItem } from "@/data/jewellery-data";

interface WishlistContextType {
  wishlist: JewelleryItem[];
  addToWishlist: (item: JewelleryItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (item: JewelleryItem) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  clearWishlist: () => void;
}

const STORAGE_KEY = "jayanti_jewellers_wishlist";

function getSnapshot(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) || "[]";
  } catch {
    return "[]";
  }
}

function getServerSnapshot(): string {
  return "[]";
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener("jayanti_wishlist_update", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("jayanti_wishlist_update", callback);
  };
}

function persistWishlist(items: JewelleryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event("jayanti_wishlist_update"));
  } catch {
    // Fallback if private browsing or storage disabled
  }
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const rawWishlist = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const wishlist: JewelleryItem[] = useMemo(() => {
    try {
      return JSON.parse(rawWishlist);
    } catch {
      return [];
    }
  }, [rawWishlist]);

  const addToWishlist = (item: JewelleryItem) => {
    if (wishlist.some((i) => i.id === item.id)) return;
    persistWishlist([...wishlist, item]);
  };

  const removeFromWishlist = (id: string) => {
    persistWishlist(wishlist.filter((i) => i.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((i) => i.id === id);
  };

  const toggleWishlist = (item: JewelleryItem) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const clearWishlist = () => {
    persistWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        isDrawerOpen,
        setIsDrawerOpen,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
