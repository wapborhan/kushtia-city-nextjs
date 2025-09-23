"use client";

import Preloader from "@/components/Preloader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function MainWrapper({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  const isLoading = false;
  return (
    <>
      {isLoading && <Preloader />}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
