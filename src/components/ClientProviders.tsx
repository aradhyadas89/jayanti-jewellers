"use client";

import { ReactNode } from "react";
import { WishlistProvider } from "@/context/WishlistContext";
import WishlistDrawer from "@/components/WishlistDrawer";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <WishlistProvider>
      {children}
      <WishlistDrawer />
    </WishlistProvider>
  );
}

