import Router from './router';
import GlobalStyle from './components/GlobalStyle';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider>
      <GlobalStyle />
      <Router />
    </SnackbarProvider>
  );
}

export default App;
