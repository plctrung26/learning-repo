import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes/routes";
import React from 'react';

const AppRoutes = () => useRoutes(routes);

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <AppRoutes />
    </Suspense>
  </BrowserRouter>

)
