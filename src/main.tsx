import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import store from './redux/store.js';

const ele = document.getElementById('root');
const queryClient = new QueryClient();
if (ele) {
  createRoot(ele).render(
    <StrictMode>
      <Provider store={store}>
        <Router>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Router>
      </Provider>
    </StrictMode>,
  );
}
