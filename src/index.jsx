import React from 'react';
import ReactDOM from 'react-dom/client';
import '@shared/scss/style.scss'; // Import Tailwind CSS here
import { App } from '@app';
import { Provider } from 'react-redux';
import store from '@config/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
