import Router from './router';
import GlobalStyle from './components/GlobalStyle';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './api';

function App() {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </SnackbarProvider>
  );
}

export default App;
