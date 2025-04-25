import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/routes";
import { Provider } from 'react-redux';
import articleStore from './redux/articleStore/articleStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppRoutes = () => useRoutes(routes);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <Provider store={articleStore}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>

  </Provider>


)
