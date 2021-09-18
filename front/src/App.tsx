import { ToastContainer } from 'react-toastify';

import { LoaderProvider } from './context/loader';

import { Routes } from './services/routes';

function App() {
  return (
    <LoaderProvider>
      <>
        <ToastContainer autoClose={5000} theme="dark" />
        <Routes />
      </>
    </LoaderProvider>
  );
}

export default App;
