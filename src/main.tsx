import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/routes";
import { Provider } from 'react-redux';
import articleStore from './redux/articleStore/articleStore';

const AppRoutes = () => useRoutes(routes);

createRoot(document.getElementById('root')!).render(
  <Provider store={articleStore}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  </Provider>


)
