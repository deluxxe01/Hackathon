import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';

function App() {
  return (
    <>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  );
}

export default App;