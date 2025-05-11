import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppWrapper from './routes/AppWrapper';

const AppRoutes = () => useRoutes(routes);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppWrapper>
          <AppRoutes />
        </AppWrapper>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>



)
