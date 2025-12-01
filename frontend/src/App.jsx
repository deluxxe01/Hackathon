import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <>
      <GlobalProvider>
        <RouterProvider router={Router} />
      </GlobalProvider>
    </>
  );
}

export default App;