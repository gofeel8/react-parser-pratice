import Route from "./router";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
