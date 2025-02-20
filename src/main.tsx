import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
